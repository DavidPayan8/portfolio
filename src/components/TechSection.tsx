import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechPill } from "./TechPill";

export function TechSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();

  return (
    <section id="tech" className="mt-stack-lg scroll-mt-28" aria-labelledby="tech-heading">
      <Reveal>
        <SectionHeading index="03" title={t.techHeading} id="tech-heading" isActive={isActive} />
        <div className="tech-grid flex flex-wrap justify-center gap-3" aria-label={t.techHeading}>
          {skills.map((tag) => (
            <TechPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
