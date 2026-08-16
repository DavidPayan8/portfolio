import { useI18n } from "../i18n/I18nContext";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { MailIcon } from "./icons/MailIcon";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="w-full py-stack-lg border-t border-outline-variant/20 bg-surface-container mt-auto">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-base">
        <div className="font-label-caps text-label-caps text-on-surface uppercase">{t.footerCopyright}</div>
        <div className="flex gap-6">
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
            href="mailto:davidpayanalvarado@gmail.com"
            aria-label={t.socialEmail}
            title={t.socialEmail}
          >
            <MailIcon />
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
            href="https://www.linkedin.com/in/david-pay%C3%A1n-alvarado-39a488252/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
            href="https://github.com/DavidPayan8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
