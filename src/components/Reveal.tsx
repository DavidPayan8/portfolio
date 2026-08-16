import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** Wraps content in a scroll-triggered "wipe" reveal (see .reveal in index.css). */
export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
