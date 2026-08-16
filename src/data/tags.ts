import type { LocalizedText } from "../i18n/types";

/**
 * A tag's label is a plain string when the term is identical in both
 * languages (proper nouns like "Angular", "Node.js"), or a LocalizedText
 * when it needs translating (e.g. "ERP integration" / "Integración ERP").
 */
export interface Tag {
  label: LocalizedText | string;
  tooltip?: LocalizedText;
}
