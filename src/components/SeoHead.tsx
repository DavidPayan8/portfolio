import { useEffect } from "react";
import { useI18n } from "../i18n/I18nContext";

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

/** Keeps <title> and the description/OG meta tags in sync with the active language. */
export function SeoHead() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t.metaTitle;
    setMetaContent('meta[name="description"]', t.metaDescription);
    setMetaContent('meta[property="og:title"]', t.ogTitle);
    setMetaContent('meta[property="og:description"]', t.ogDescription);
  }, [t]);

  return null;
}
