import type { Project } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { TagPill } from "./TagPill";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useI18n();
  const colSpanClass = project.size === "large" ? "md:col-span-8" : "md:col-span-4";
  const isProgress = project.badgeVariant === "progress";

  return (
    <article
      className={`project-card ${colSpanClass} group relative rounded overflow-hidden bg-surface flex flex-col ${project.heightClass} fade-in-up ${project.delayClass}`}
    >
      <div className="project-border absolute inset-0 border border-outline-variant/30 rounded z-20 pointer-events-none transition-colors duration-500" />
      <div className="card-media absolute inset-0 z-0 media-placeholder opacity-70 transition-opacity duration-700 flex items-start justify-center pt-20">
        {/* TODO: replace with <video autoplay muted loop playsinline poster="..."><source src="/videos/<id>.mp4" type="video/mp4"></video> */}
        <div
          className="play-badge w-16 h-16 rounded-full border border-outline-variant/60 flex items-center justify-center transition-transform duration-500"
          aria-hidden="true"
        >
          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-on-surface-variant ml-1" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full p-8 bg-gradient-to-t from-background/95 via-background/50 to-transparent">
        {project.badge && (
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`w-2 h-2 rounded-full ${isProgress ? "bg-outline-variant" : "bg-secondary-container animate-pulse"}`}
              aria-hidden="true"
            />
            <span
              className={`font-label-caps text-label-caps tracking-widest uppercase ${isProgress ? "text-on-surface-variant" : "text-secondary-container"}`}
            >
              {project.badge[lang]}
            </span>
          </div>
        )}
        <h3
          className={`font-headline-lg text-headline-lg text-on-surface mb-2 ${project.size === "small" ? "text-2xl" : ""}`}
        >
          {project.title[lang]}
        </h3>
        <p
          className={`font-body-md text-body-md text-on-surface-variant mb-4 ${project.size === "large" ? "max-w-lg" : ""}`}
        >
          {project.description[lang]}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <TagPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
