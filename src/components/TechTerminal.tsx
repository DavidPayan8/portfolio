import { useEffect, useRef, useState, type CSSProperties } from "react";

const TYPE_MS = 32;
const ERASE_MS = 16;

interface TechTerminalProps {
  /** The command to type toward. Empty string types nothing and, if something
   * was already on screen, erases it back down to empty. */
  command: string;
  /** Cursor + prompt color; falls back to the site accent when idle. */
  brand: string;
}

/**
 * A terminal window that types the given command out one character at a time,
 * and erases back to their common prefix when it changes — so switching
 * technologies mid-word doesn't restart from scratch, it corrects itself the
 * way a person editing a command line would.
 *
 * Runs off a self-scheduling setTimeout rather than setInterval so the delay
 * between typing and erasing can differ, and reads the in-flight text from a
 * ref (not the `display` state) to avoid the effect needing `display` as a
 * dependency, which would tear the timer down and rebuild it every keystroke.
 */
export function TechTerminal({ command, brand }: TechTerminalProps) {
  const [display, setDisplay] = useState("");
  const displayRef = useRef("");

  useEffect(() => {
    let cancelled = false;

    function tick() {
      if (cancelled) return;
      const current = displayRef.current;
      if (current === command) return;

      const next = command.startsWith(current) ? command.slice(0, current.length + 1) : current.slice(0, -1);
      const delay = next.length > current.length ? TYPE_MS : ERASE_MS;

      displayRef.current = next;
      setDisplay(next);
      window.setTimeout(tick, delay);
    }

    tick();
    return () => {
      cancelled = true;
    };
  }, [command]);

  return (
    <div className="tech-terminal" style={{ "--brand": brand } as CSSProperties} aria-hidden="true">
      <div className="tech-terminal-bar">
        <span className="tech-terminal-dot tech-terminal-dot--red" />
        <span className="tech-terminal-dot tech-terminal-dot--yellow" />
        <span className="tech-terminal-dot tech-terminal-dot--green" />
      </div>
      <div className="tech-terminal-body font-code-sm text-code-sm">
        <span className="tech-terminal-prompt">$</span>
        <span>{display}</span>
        <span className="tech-terminal-cursor" />
      </div>
    </div>
  );
}
