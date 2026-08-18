import type { Tag } from "../data/tags";
import { useI18n } from "../i18n/I18nContext";
import { TechIcon } from "./icons/TechIcon";

/** Static tag used on project cards. The interactive version lives in TechPill. */
export function TagPill({ tag }: { tag: Tag }) {
  const { lang } = useI18n();
  const label = typeof tag.label === "string" ? tag.label : tag.label[lang];
  const tooltip = tag.tooltip?.[lang];
  const icons = tag.icon ? (Array.isArray(tag.icon) ? tag.icon : [tag.icon]) : [];

  return (
    <span
      className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50 rounded px-2 py-1"
      title={tooltip}
    >
      {icons.map((slug) => (
        <TechIcon key={slug} slug={slug} color />
      ))}
      {label}
    </span>
  );
}
