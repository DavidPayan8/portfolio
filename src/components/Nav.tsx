import { useI18n } from "../i18n/I18nContext";
import { LanguageToggle } from "./LanguageToggle";

export function Nav() {
  const { t } = useI18n();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-outline-variant/30 z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-gutter py-base max-w-container-max mx-auto h-16">
        <a href="#top" className="font-label-caps text-label-caps tracking-widest text-on-surface uppercase">
          David Payán
        </a>
        <div className="hidden md:flex gap-8 items-center" role="navigation" aria-label="Primary">
          <a
            className="font-label-caps text-label-caps text-on-surface border-b-2 border-on-surface pb-1 uppercase"
            href="#work"
          >
            {t.navWork}
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-300 uppercase"
            href="#about"
          >
            {t.navAbout}
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-300 uppercase"
            href="#contact"
          >
            {t.navContact}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="/CV_David_Payan_EN.docx"
            download
            className="bg-surface-container-high text-on-surface border border-outline-variant/50 hover:bg-surface-bright hover:border-outline px-6 py-2 rounded font-label-caps text-label-caps transition-all duration-300 uppercase"
          >
            {t.navResume}
          </a>
        </div>
      </div>
    </nav>
  );
}
