import { useI18n } from "../i18n/I18nContext";
import { FlagEsIcon } from "./icons/FlagEsIcon";
import { FlagGbIcon } from "./icons/FlagGbIcon";

export function LanguageToggle() {
  const { lang, t, toggleLang } = useI18n();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={lang === "en"}
      aria-label={t.langToggleLabel}
      onClick={toggleLang}
      className="lang-switch"
    >
      <span className="lang-switch-flag" data-flag="es">
        <FlagEsIcon size={18} />
      </span>
      <span className="lang-switch-thumb" aria-hidden="true" />
      <span className="lang-switch-flag" data-flag="gb">
        <FlagGbIcon size={18} />
      </span>
    </button>
  );
}
