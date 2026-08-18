import { useEffect, useState, type CSSProperties } from "react";
import { getBrandColor, TechIcon } from "./icons/TechIcon";

interface TechBackdropProps {
  slug: string;
  /** Where the hovered pill sits, relative to the section stage. */
  x: number;
  y: number;
  leaving: boolean;
}

/**
 * The oversized, blurred technology mark that blooms out of whichever pill is
 * hovered. Mounts transparent and fades in on the next frame so the CSS
 * transition actually has two states to move between; the enter/exit fade lives
 * on the wrapper while the bloom-and-drift keyframes live on the inner shape,
 * because an animation with a forwards fill would otherwise win over the
 * transition on the same property.
 */
export function TechBackdrop({ slug, x, y, leaving }: TechBackdropProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`tech-backdrop ${entered && !leaving ? "is-visible" : ""}`}
      style={{ "--bx": `${x}px`, "--by": `${y}px`, "--brand": getBrandColor(slug) } as CSSProperties}
      aria-hidden="true"
    >
      <span className="tech-backdrop-shape">
        <TechIcon slug={slug} size="100%" />
      </span>
    </div>
  );
}
