import { useState } from "react";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { ChevronIcon } from "./icons/ChevronIcon";
import { ProjectCard } from "./ProjectCard";

export function ProjectCarousel() {
  const { t, lang } = useI18n();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = projects.length;
  const project = projects[index];

  function goTo(targetIndex: number, dir: 1 | -1) {
    setDirection(dir);
    setIndex((targetIndex + total) % total);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="font-code-sm text-code-sm text-on-surface-variant">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1, -1)}
            className="carousel-nav-btn"
            aria-label={t.carouselPrevLabel}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1, 1)}
            className="carousel-nav-btn"
            aria-label={t.carouselNextLabel}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        key={`${project.id}-${direction}`}
        className={direction === 1 ? "carousel-slide-right" : "carousel-slide-left"}
      >
        <ProjectCard project={project} />
      </div>

      <div className="flex items-center gap-2 mt-6" role="tablist" aria-label="Projects">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={p.title[lang]}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={`carousel-dot ${i === index ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
