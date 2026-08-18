import type { CSSProperties } from "react";
import type { Tag } from "../data/tags";
import { useI18n } from "../i18n/I18nContext";
import { getBrandColor, TechIcon } from "./icons/TechIcon";

interface TagPillProps {
  tag: Tag;
  /** "tech" pills start neutral and take on the brand color on hover (Technologies section).
   * The default keeps the icon permanently colored, for the tags on project cards. */
  variant?: "default" | "tech";
}

export function TagPill({ tag, variant = "default" }: TagPillProps) {
  const { lang } = useI18n();
  const label = typeof tag.label === "string" ? tag.label : tag.label[lang];
  const tooltip = tag.tooltip?.[lang];
  const icons = tag.icon ? (Array.isArray(tag.icon) ? tag.icon : [tag.icon]) : [];
  const isTech = variant === "tech";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50 rounded ${
        isTech ? "tech-pill px-3 py-2" : "px-2 py-1"
      }`}
      style={isTech ? ({ "--brand": getBrandColor(icons[0]) } as CSSProperties) : undefined}
      title={tooltip}
    >
      {icons.map((slug) => (
        <TechIcon key={slug} slug={slug} size={isTech ? 14 : 12} color={!isTech} />
      ))}
      {label}
    </span>
  );
}
