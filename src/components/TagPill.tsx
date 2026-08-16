import type { Tag } from "../data/tags";
import { useI18n } from "../i18n/I18nContext";

export function TagPill({ tag }: { tag: Tag }) {
  const { lang } = useI18n();
  const label = typeof tag.label === "string" ? tag.label : tag.label[lang];
  const tooltip = tag.tooltip?.[lang];

  return (
    <span
      className="font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50 rounded px-2 py-1"
      title={tooltip}
    >
      {label}
    </span>
  );
}
