import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const { t } = useI18n();

  return (
    <section id="work" aria-labelledby="work-heading">
      <h2 id="work-heading" className="sr-only">
        {t.workSrHeading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
