import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently the most visible one,
 * so its heading rule can be highlighted while you're reading it.
 *
 * `ids` must be a stable reference (declare it outside the component) —
 * a fresh array every render would tear down and rebuild the observer.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        // Keep the last active section highlighted rather than flickering to
        // none while scrolling through a gap between sections.
        if (best) setActiveId(best);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
