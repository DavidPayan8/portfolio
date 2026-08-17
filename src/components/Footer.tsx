import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full py-stack-lg border-t border-outline-variant/20 bg-surface-container mt-auto">
      <Reveal className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-base">
        <div className="font-label-caps text-label-caps text-on-surface uppercase">{t.footerCopyright}</div>
        <SocialLinks />
      </Reveal>
    </footer>
  );
}
