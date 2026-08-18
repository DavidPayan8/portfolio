import { education } from "../data/education";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AboutSection({ isActive }: { isActive?: boolean }) {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="mt-stack-lg scroll-mt-28" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading index="02" title={t.aboutHeading} id="about-heading" isActive={isActive} />
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{t.aboutParagraph}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{t.aboutParagraphSecondary}</p>
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
