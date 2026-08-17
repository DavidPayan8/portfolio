import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mt-stack-lg scroll-mt-28" aria-labelledby="contact-heading">
      <Reveal className="text-center">
        <SectionHeading index="03" title={t.contactHeading} id="contact-heading" />
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{t.contactParagraph}</p>
        <a
          href="mailto:davidpayanalvarado@gmail.com"
          className="inline-block font-headline-lg text-headline-lg text-on-surface hover:text-secondary-container transition-colors duration-300 mb-8 break-all"
        >
          davidpayanalvarado@gmail.com
        </a>
        <SocialLinks className="flex justify-center gap-6" />
      </Reveal>
    </section>
  );
}
