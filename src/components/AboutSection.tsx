import { education } from "../data/education";
import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TagPill } from "./TagPill";

export function AboutSection() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="mt-stack-lg scroll-mt-28" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading index="02" title={t.aboutHeading} id="about-heading" />
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{t.aboutParagraph}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{t.aboutParagraphSecondary}</p>
        <div className="flex flex-wrap gap-2 mt-6" aria-label="Core skills">
          {skills.map((tag) => (
            <TagPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase mb-2">
            {t.educationHeading}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {education.program[lang]} — {education.institution} · {education.period}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
