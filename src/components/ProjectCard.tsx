import { useRef, type MouseEvent } from "react";
import type { Project } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { TagPill } from "./TagPill";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useI18n();
  const isProgress = project.badgeVariant === "progress";
  const mediaRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = mediaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  }

  return (
    <article className="project-card relative rounded overflow-hidden bg-surface flex flex-col w-full min-h-[440px]">
      <div className="project-border absolute inset-0 border border-outline-variant/30 rounded z-20 pointer-events-none transition-colors duration-500" />
      <div
        ref={mediaRef}
        onMouseMove={handleMouseMove}
        className="card-media absolute inset-0 z-0 media-placeholder opacity-70 transition-opacity duration-700 flex items-start justify-center pt-20"
      >
        {project.hasMedia && (
          <div
            className="play-badge w-16 h-16 rounded-full border border-outline-variant/60 flex items-center justify-center transition-transform duration-500"
            aria-hidden="true"
          >
            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-on-surface-variant ml-1" />
          </div>
        )}
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 bg-gradient-to-t from-background/95 via-background/50 to-transparent">
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
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{project.title[lang]}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-4">{project.description[lang]}</p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <TagPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
