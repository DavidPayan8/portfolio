import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { TagPill } from "./TagPill";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="mt-stack-lg fade-in-up" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
        </div>
      </div>
    </section>
  );
}
