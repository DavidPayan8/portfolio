import { useEffect, useRef, useState, type CSSProperties } from "react";

const TYPE_MS = 32;
const ERASE_MS = 16;

interface TechTerminalProps {
  /** The full multi-line text to type toward (e.g. "cat angular.sh\nng generate…").
   * Empty types nothing and, if something was already on screen, erases it. */
  command: string;
  /** Cursor + prompt color; falls back to the site accent when idle. */
  brand: string;
}

/**
 * A single `$ ` prompt line that types the given text out one character at a
 * time, and erases back to the common prefix when it changes — so switching
 * technologies mid-word doesn't restart from scratch, it corrects itself the
 * way a person editing a command line would. A literal "\n" in `command`
 * breaks to a second, prompt-less line (white-space: pre renders it), which
 * is how the fake `cat <file>` output reads as output rather than a command.
 *
 * Runs off a self-scheduling setTimeout rather than setInterval so the delay
 * between typing and erasing can differ, and reads the in-flight text from a
 * ref (not the `display` state) to avoid the effect needing `display` as a
 * dependency, which would tear the timer down and rebuild it every keystroke.
 *
 * Renders just the prompt line — the surrounding window chrome lives once in
 * TechSection, wrapping this alongside the `ls` listing.
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
    <div className="tech-console-line" style={{ "--brand": brand } as CSSProperties} aria-hidden="true">
      <span className="tech-console-prompt">$</span>
      <span className="whitespace-pre-wrap">{display}</span>
      <span className="tech-console-cursor" />
    </div>
  );
}
