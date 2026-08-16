import { useEffect, useState, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content in a scroll-triggered "wipe" reveal (see .reveal in index.css).
 * Once the entrance transition has finished, the clip-path is dropped entirely
 * (via .reveal-done) so it can never clip interactive descendants afterwards
 * (e.g. a button translating on :hover).
 */
export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const timer = window.setTimeout(() => setSettled(true), 950);
    return () => window.clearTimeout(timer);
  }, [isVisible]);

  const classes = ["reveal", isVisible && "is-visible", settled && "reveal-done", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
