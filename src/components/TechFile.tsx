import { useEffect, useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import type { Tag } from "../data/tags";
import { useI18n } from "../i18n/I18nContext";
import { getBrandColor, TechIcon } from "./icons/TechIcon";

/** Same brand color, softened — used for the glow that tracks the cursor.
 * Built here rather than with color-mix() so it doesn't depend on that
 * being supported. */
function withAlpha(hex: string, alpha: number): string {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

const RESET: ReadonlyArray<readonly [string, string]> = [
  ["--rx", "0deg"],
  ["--ry", "0deg"],
  ["--tx", "0px"],
  ["--ty", "0px"],
  ["--mx", "50%"],
  ["--my", "50%"],
];

interface TechFileProps {
  tag: Tag;
  /** Tells the console which entry to `cat` and what color to type it in.
   * Fires for every tag, including ones with no brand mark (brand then falls
   * back to the site accent). */
  onActivate?: (label: string, brand: string) => void;
  onDeactivate?: () => void;
}

/**
 * One entry in the `ls stack/` listing — same pointer-tracked 3D tilt and
 * brand-colored glow as the old standalone pill, just styled as inline
 * terminal output (no border/background of its own) since it now lives
 * inside the console rather than floating next to it.
 */
export function TechFile({ tag, onActivate, onDeactivate }: TechFileProps) {
  const { lang } = useI18n();
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    },
    [],
  );

  const label = typeof tag.label === "string" ? tag.label : tag.label[lang];
  // Language-invariant lookup key — the same derivation TechSection uses for
  // React's `key` prop. Using the (possibly Spanish) display `label` here
  // would miss techCommands entries, which are keyed by the English form.
  const commandKey = typeof tag.label === "string" ? tag.label : tag.label.en;
  const tooltip = tag.tooltip?.[lang];
  const icons = tag.icon ? (Array.isArray(tag.icon) ? tag.icon : [tag.icon]) : [];
  const brand = getBrandColor(icons[0]);

  function handlePointerMove(event: ReactPointerEvent<HTMLSpanElement>) {
    // Touch would "tilt" the entry on tap and leave it stuck that way.
    if (event.pointerType === "touch") return;
    const el = ref.current;
    if (!el || frame.current !== null) return;

    const { clientX, clientY } = event;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width; // 0 → 1, left to right
      const y = (clientY - rect.top) / rect.height; // 0 → 1, top to bottom

      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      el.style.setProperty("--ry", `${(x - 0.5) * 22}deg`);
      el.style.setProperty("--rx", `${(0.5 - y) * 16}deg`);
      el.style.setProperty("--tx", `${(x - 0.5) * 6}px`);
      el.style.setProperty("--ty", `${(y - 0.5) * 6}px`);
    });
  }

  function handlePointerEnter(event: ReactPointerEvent<HTMLSpanElement>) {
    if (event.pointerType === "touch" || !onActivate) return;
    onActivate(commandKey, brand);
  }

  function handlePointerLeave() {
    onDeactivate?.();
    const el = ref.current;
    if (!el) return;
    if (frame.current !== null) {
      window.cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    for (const [property, value] of RESET) el.style.setProperty(property, value);
  }

  return (
    <span
      ref={ref}
      className="tech-file inline-flex items-center gap-1.5 text-on-surface-variant"
      style={{ "--brand": brand, "--brand-soft": withAlpha(brand, 0.34) } as CSSProperties}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      title={tooltip}
    >
      <span className="tech-file-glow" aria-hidden="true" />
      <span className="tech-file-content inline-flex items-center gap-1.5">
        {icons.map((slug) => (
          <span key={slug} className="tech-file-icon inline-flex">
            <TechIcon slug={slug} size={14} />
          </span>
        ))}
        {label}
      </span>
    </span>
  );
}
