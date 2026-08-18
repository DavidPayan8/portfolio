import { useI18n } from "../i18n/I18nContext";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const { t } = useI18n();

  return (
    <header className="mb-24 hero-reveal flex flex-col items-center text-center">
      <img
        src="/photo.jpg"
        alt="David Payán"
        width={200}
        height={200}
        className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover"
      />
      <div className="mt-4 font-label-caps text-label-caps tracking-widest text-secondary-container uppercase">
        {t.heroRole}
      </div>

      <h1 className="font-headline-xl text-headline-xl text-on-surface mt-6 mb-6 leading-tight">David Payán</h1>

      <p className="font-body-md text-body-md text-on-surface-variant">{t.heroIntro}</p>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4">{t.heroIntroSecondary}</p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="#work"
          className="border border-outline-variant text-secondary-container hover:border-secondary-container px-6 py-3 rounded font-label-caps text-label-caps transition-colors duration-300 uppercase"
        >
          {t.ctaWork}
        </a>
        <a
          href="#contact"
          className="bg-secondary-container text-background hover:opacity-90 px-6 py-3 rounded font-label-caps text-label-caps transition-opacity duration-300 uppercase"
        >
          {t.ctaContact}
        </a>
      </div>

      <div className="mt-8">
        <SocialLinks />
      </div>
    </header>
  );
}
