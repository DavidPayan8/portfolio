import { useI18n } from "../i18n/I18nContext";
import { ProjectCarousel } from "./ProjectCarousel";
import { Reveal } from "./Reveal";

export function WorkSection() {
  const { t } = useI18n();

  return (
    <section id="work" className="scroll-mt-28" aria-labelledby="work-heading">
      <h2 id="work-heading" className="sr-only">
        {t.workSrHeading}
      </h2>
      <Reveal>
        <ProjectCarousel />
      </Reveal>
    </section>
  );
}
