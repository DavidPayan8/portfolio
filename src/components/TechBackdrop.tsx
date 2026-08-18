import { useEffect, useState, type CSSProperties } from "react";
import { getBrandColor, TechIcon } from "./icons/TechIcon";

interface TechBackdropProps {
  slug: string;
  leaving: boolean;
}

/**
 * The technology mark that blooms, centered, behind the pills while one is
 * hovered. Mounts transparent and fades in on the next frame so the CSS
 * transition has two states to move between; the enter/exit fade lives on the
 * wrapper while the bloom-and-drift keyframes live on the inner shape, because
 * an animation with a forwards fill would otherwise win over the transition on
 * the same property and the exit fade would never run.
 */
export function TechBackdrop({ slug, leaving }: TechBackdropProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`tech-backdrop ${entered && !leaving ? "is-visible" : ""}`}
      style={{ "--brand": getBrandColor(slug) } as CSSProperties}
      aria-hidden="true"
    >
      <span className="tech-backdrop-shape">
        <TechIcon slug={slug} size="100%" />
      </span>
    </div>
  );
}
