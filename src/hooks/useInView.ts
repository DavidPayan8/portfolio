import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  /** Safety net: force visible after this many ms, in case the observer never fires. */
  fallbackDelayMs?: number;
}

/** Tracks whether an element has scrolled into the viewport, via IntersectionObserver. */
export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0, rootMargin = "0px", once = true, fallbackDelayMs = 1500 } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    // Never leave content permanently hidden if the observer doesn't fire
    // for some reason (short pages, layout edge cases, etc).
    const fallback = window.setTimeout(() => setIsVisible(true), fallbackDelayMs);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, rootMargin, once, fallbackDelayMs]);

  return { ref, isVisible };
}
