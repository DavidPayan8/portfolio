import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TagPill } from "./TagPill";

export function TechSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();

  return (
    <section id="tech" className="mt-stack-lg scroll-mt-28" aria-labelledby="tech-heading">
      <Reveal>
        <SectionHeading index="03" title={t.techHeading} id="tech-heading" isActive={isActive} />
        <div className="flex flex-wrap gap-3" aria-label={t.techHeading}>
          {skills.map((tag) => (
            <TagPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} variant="tech" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
