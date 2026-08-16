import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { CloseIcon } from "./icons/CloseIcon";

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const { lang, t } = useI18n();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="video-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="video-modal-close"
          aria-label={t.closeLabel}
        >
          <CloseIcon size={18} />
        </button>

        <video
          className="video-modal-video"
          src={project.videoSrcFull}
          controls
          autoPlay
          playsInline
        />

        <div className="video-modal-caption">
          <h3 id="video-modal-title" className="font-headline-lg text-headline-lg text-on-surface mb-2 text-xl">
            {project.title[lang]}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{project.description[lang]}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
