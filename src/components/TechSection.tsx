import { useCallback, useEffect, useRef, useState } from "react";
import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechBackdrop } from "./TechBackdrop";
import { TechPill } from "./TechPill";

/** Long enough for the backdrop's fade-out to finish before it unmounts. */
const EXIT_MS = 500;

export function TechSection({ isActive }: { isActive?: boolean }) {
  const { t } = useI18n();
  const exitTimer = useRef<number | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(
    () => () => {
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);
    },
    [],
  );

  const handleActivate = useCallback((slug: string) => {
    if (exitTimer.current !== null) {
      window.clearTimeout(exitTimer.current);
      exitTimer.current = null;
    }
    setLeaving(false);
    setActiveSlug(slug);
  }, []);

  const handleDeactivate = useCallback(() => {
    setLeaving(true);
    exitTimer.current = window.setTimeout(() => {
      exitTimer.current = null;
      setActiveSlug(null);
      setLeaving(false);
    }, EXIT_MS);
  }, []);

  return (
    <section id="tech" className="mt-stack-lg scroll-mt-28" aria-labelledby="tech-heading">
      <Reveal>
        <SectionHeading index="03" title={t.techHeading} id="tech-heading" isActive={isActive} />
        <div className="tech-stage">
          {activeSlug && (
            // Re-keying on slug restarts the bloom, so switching pills replays it.
            <TechBackdrop key={activeSlug} slug={activeSlug} leaving={leaving} />
          )}
          <div className="tech-grid relative z-[1] flex flex-wrap justify-center gap-3" aria-label={t.techHeading}>
            {skills.map((tag) => (
              <TechPill
                key={typeof tag.label === "string" ? tag.label : tag.label.en}
                tag={tag}
                onActivate={handleActivate}
                onDeactivate={handleDeactivate}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
