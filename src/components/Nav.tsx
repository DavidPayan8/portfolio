import { useI18n } from "../i18n/I18nContext";
import { LanguageToggle } from "./LanguageToggle";

const NAV_LINK_CLASS =
  "font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-300 uppercase";

export function Nav() {
  const { t, lang } = useI18n();
  const resumeFile = lang === "es" ? "CV_David_Payan_ES.pdf" : "CV_David_Payan_EN.pdf";

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-outline-variant/30 z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-gutter py-base max-w-container-max mx-auto h-16">
        <a href="#top" className="font-label-caps text-label-caps tracking-widest text-on-surface uppercase">
          David Payán
        </a>
        <div className="hidden md:flex gap-8 items-center" role="navigation" aria-label="Primary">
          <a className={NAV_LINK_CLASS} href="#work">
            {t.navWork}
          </a>
          <a className={NAV_LINK_CLASS} href="#about">
            {t.navAbout}
          </a>
          <a className={NAV_LINK_CLASS} href="#contact">
            {t.navContact}
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle />
          <a
            href={`/${resumeFile}`}
            download={resumeFile}
            className="bg-on-surface text-background hover:opacity-90 px-4 sm:px-6 py-2 rounded font-label-caps text-label-caps transition-opacity duration-300 uppercase whitespace-nowrap"
          >
            {t.navResume}
          </a>
        </div>
      </div>
    </nav>
  );
}
