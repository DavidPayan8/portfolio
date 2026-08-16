import { education } from "../data/education";
import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { TagPill } from "./TagPill";

export function AboutSection() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="mt-stack-lg" aria-labelledby="about-heading">
      <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h2 id="about-heading" className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t.aboutHeading}
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-4">{t.aboutParagraph}</p>
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
        </div>
      </Reveal>
    </section>
  );
}
