import { useI18n } from "../i18n/I18nContext";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const { t } = useI18n();

  return (
    <header className="mb-24 hero-reveal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 leading-tight">
            {t.heroHeadline}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">{t.heroIntro}</p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-4">{t.heroIntroSecondary}</p>
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
        </div>
        <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center md:items-end text-center md:text-right">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" aria-hidden="true" />
            <span className="font-label-caps text-label-caps text-secondary-container tracking-widest uppercase">
              {t.badgeAvailable}
            </span>
          </div>
          <img
            src="/photo.jpg"
            alt="David Payán"
            width={200}
            height={200}
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border border-outline-variant/40"
          />
          <div className="mt-4">
            <div className="font-label-caps text-label-caps tracking-widest text-on-surface uppercase">
              David Payán
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant mt-1">{t.heroRole}</div>
          </div>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
