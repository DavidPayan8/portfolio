import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "./types";
import { translations, type UiText } from "./translations";

const STORAGE_KEY = "site-lang";
const DEFAULT_LANG: Lang = "es";

interface I18nContextValue {
  lang: Lang;
  t: UiText;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function readInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall back to default
  }
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore write failures, language just won't persist
    }
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((current) => (current === "es" ? "en" : "es")),
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
