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

/**
 * A technology pill that tilts in 3D toward the pointer, with a brand-colored
 * glow tracking the cursor across it. Pointer maths is written straight to CSG
 * custom properties inside a rAF, so no React re-render happens per mouse move.
 */
export function TechPill({ tag }: { tag: Tag }) {
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
  const tooltip = tag.tooltip?.[lang];
  const icons = tag.icon ? (Array.isArray(tag.icon) ? tag.icon : [tag.icon]) : [];
  const brand = getBrandColor(icons[0]);

  function handlePointerMove(event: ReactPointerEvent<HTMLSpanElement>) {
    // Touch would "tilt" the pill on tap and leave it stuck that way.
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
      el.style.setProperty("--ry", `${(x - 0.5) * 26}deg`);
      el.style.setProperty("--rx", `${(0.5 - y) * 20}deg`);
      el.style.setProperty("--tx", `${(x - 0.5) * 8}px`);
      el.style.setProperty("--ty", `${(y - 0.5) * 8}px`);
    });
  }

  function handlePointerLeave() {
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
      className="tech-pill inline-flex items-center font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50 rounded px-3 py-2"
      style={{ "--brand": brand, "--brand-soft": withAlpha(brand, 0.34) } as CSSProperties}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      title={tooltip}
    >
      <span className="tech-pill-glow" aria-hidden="true" />
      <span className="tech-pill-content inline-flex items-center gap-2">
        {icons.map((slug) => (
          <span key={slug} className="tech-pill-icon inline-flex">
            <TechIcon slug={slug} size={16} />
          </span>
        ))}
        {label}
      </span>
    </span>
  );
}
