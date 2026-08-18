import { useI18n } from "../i18n/I18nContext";
import { ProjectCarousel } from "./ProjectCarousel";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WorkSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();

  return (
    <section id="work" className="scroll-mt-28" aria-labelledby="work-heading">
      <Reveal>
        <SectionHeading index="01" title={t.workHeading} id="work-heading" isActive={isActive} />
        <ProjectCarousel />
      </Reveal>
    </section>
  );
}
