import { useCallback, useState } from "react";
import { skills } from "../data/skills";
import { techCommands } from "../data/techCommands";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechFile } from "./TechFile";
import { TechTerminal } from "./TechTerminal";

const ACCENT = "#00d2fd";

export function TechSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();
  const [active, setActive] = useState<{ command: string; brand: string } | null>(null);

  const handleActivate = useCallback((commandKey: string, brand: string) => {
    const entry = techCommands[commandKey];
    if (entry) setActive({ command: `cat ${entry.file}\n${entry.command}`, brand });
  }, []);

  const handleDeactivate = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <section id="tech" className="mt-stack-lg scroll-mt-28" aria-labelledby="tech-heading">
      <Reveal>
        <SectionHeading index="03" title={t.techHeading} id="tech-heading" isActive={isActive} />
        {/* The whole section's content is this one console — no separate pill
            row next to a separate terminal card. The `ls` listing IS the tech
            list (each entry keeps the 3D-tilt/glow interaction), and hovering
            one "cats" it on the prompt line below, inside the same window. */}
        <div className="tech-console">
          <div className="tech-console-bar">
            <span className="tech-console-dot tech-console-dot--red" />
            <span className="tech-console-dot tech-console-dot--yellow" />
            <span className="tech-console-dot tech-console-dot--green" />
          </div>
          <div className="tech-console-body font-code-sm text-code-sm">
            <div className="tech-console-line">
              <span className="tech-console-prompt">$</span>
              ls stack/
            </div>
            <div className="tech-console-listing" aria-label={t.techHeading}>
              {skills.map((tag) => (
                <TechFile
                  key={typeof tag.label === "string" ? tag.label : tag.label.en}
                  tag={tag}
                  onActivate={handleActivate}
                  onDeactivate={handleDeactivate}
                />
              ))}
            </div>
            <TechTerminal command={active?.command ?? ""} brand={active?.brand ?? ACCENT} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
