import { useState } from "react";
import type { Project } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { ExpandIcon } from "./icons/ExpandIcon";
import { TagPill } from "./TagPill";
import { VideoModal } from "./VideoModal";

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useI18n();
  const isProgress = project.badgeVariant === "progress";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="project-card relative rounded overflow-hidden bg-surface flex flex-col justify-end w-full min-h-[440px]">
      <div className="project-border absolute inset-0 border border-outline-variant/30 rounded z-20 pointer-events-none" />
      <div
        className={`card-media absolute inset-0 z-0 transition-opacity duration-700 flex items-start justify-center pt-20 ${
          project.videoSrc ? "" : "media-placeholder opacity-70"
        }`}
      >
        {project.videoSrc ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={project.videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          project.hasMedia && (
            <div
              className="play-badge w-16 h-16 rounded-full border border-outline-variant/60 flex items-center justify-center transition-transform duration-500"
              aria-hidden="true"
            >
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-on-surface-variant ml-1" />
            </div>
          )
        )}

        {project.videoSrcFull && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="video-maximize-btn"
            aria-label={t.maximizeLabel}
            title={t.maximizeLabel}
          >
            <ExpandIcon size={18} />
          </button>
        )}
      </div>
      <div className="relative z-10 p-8 md:p-10 bg-gradient-to-t from-background/95 via-background/85 to-background/60 pointer-events-none">
        {project.badge && (
          <div className="flex items-center justify-center gap-3 mb-4">
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
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{project.description[lang]}</p>
        <div className="flex flex-wrap justify-center gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <TagPill key={typeof tag.label === "string" ? tag.label : tag.label.en} tag={tag} />
          ))}
        </div>
      </div>

      {isModalOpen && <VideoModal project={project} onClose={() => setIsModalOpen(false)} />}
    </article>
  );
}
