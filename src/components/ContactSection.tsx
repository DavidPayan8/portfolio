import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mt-stack-lg scroll-mt-28" aria-labelledby="contact-heading">
      <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h2 id="contact-heading" className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t.contactHeading}
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-6">{t.contactParagraph}</p>
          <a
            href="mailto:davidpayanalvarado@gmail.com"
            className="inline-block font-headline-lg text-headline-lg text-on-surface hover:text-secondary-container transition-colors duration-300 mb-8 break-all"
          >
            davidpayanalvarado@gmail.com
          </a>
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
}
