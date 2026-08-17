import { useI18n } from "../i18n/I18nContext";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const { t } = useI18n();

  return (
    <header className="mb-24 hero-reveal">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/photo.jpg"
          alt="David Payán"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover border border-outline-variant/40"
        />
        <SocialLinks />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" aria-hidden="true" />
        <span className="font-label-caps text-label-caps text-secondary-container tracking-widest uppercase">
          {t.badgeAvailable}
        </span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 max-w-3xl leading-tight">
        {t.heroHeadline}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">{t.heroIntro}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="#work"
          className="bg-on-surface text-background hover:opacity-90 px-6 py-3 rounded font-label-caps text-label-caps transition-opacity duration-300 uppercase"
        >
          {t.ctaWork}
        </a>
        <a
          href="#contact"
          className="border border-outline-variant text-secondary-container hover:border-secondary-container px-6 py-3 rounded font-label-caps text-label-caps transition-colors duration-300 uppercase"
        >
          {t.ctaContact}
        </a>
      </div>
    </header>
  );
}
