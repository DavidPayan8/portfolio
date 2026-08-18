import { useCallback, useState } from "react";
import { skills } from "../data/skills";
import { techCommands } from "../data/techCommands";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechPill } from "./TechPill";
import { TechTerminal } from "./TechTerminal";

const ACCENT = "#00d2fd";

export function TechSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();
  const [active, setActive] = useState<{ command: string; brand: string } | null>(null);

  const handleActivate = useCallback((commandKey: string, brand: string) => {
    const command = techCommands[commandKey];
    if (command) setActive({ command, brand });
  }, []);

  const handleDeactivate = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <section id="tech" className="mt-stack-lg scroll-mt-28" aria-labelledby="tech-heading">
      <Reveal>
        <SectionHeading index="03" title={t.techHeading} id="tech-heading" isActive={isActive} />
        <div className="flex justify-center mb-8">
          <TechTerminal command={active?.command ?? ""} brand={active?.brand ?? ACCENT} />
        </div>
        <div className="tech-grid flex flex-wrap justify-center gap-3" aria-label={t.techHeading}>
          {skills.map((tag) => (
            <TechPill
              key={typeof tag.label === "string" ? tag.label : tag.label.en}
              tag={tag}
              onActivate={handleActivate}
              onDeactivate={handleDeactivate}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
