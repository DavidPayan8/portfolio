import {
  siAngular,
  siDart,
  siDotnet,
  siElectron,
  siFlutter,
  siLaravel,
  siNodedotjs,
  siReact,
  siRedsys,
  siSupabase,
  siTypescript,
} from "simple-icons";

const ICONS = {
  angular: siAngular,
  nodedotjs: siNodedotjs,
  laravel: siLaravel,
  flutter: siFlutter,
  dart: siDart,
  dotnet: siDotnet,
  redsys: siRedsys,
  react: siReact,
  supabase: siSupabase,
  typescript: siTypescript,
  electron: siElectron,
} as const;

/** simple-icons ships every mark on a 0 0 24 24 canvas, but a few glyphs (e.g. .NET's
 * wordmark) only fill a thin band of it — cropping to the real bounding box keeps
 * every icon reading at the same visual size next to its label. */
const VIEW_BOX_OVERRIDES: Partial<Record<TechIconSlug, string>> = {
  dotnet: "0 7.5 24 9",
};

/** A few brand colors don't hold up against our dark background (Angular's flat
 * swatch is near-black — WCAG contrast ~1:1). Lightened, same-hue stand-ins so every
 * icon stays legible while still reading as that brand's color at a glance. */
const COLOR_OVERRIDES: Partial<Record<TechIconSlug, string>> = {
  angular: "#F0475F",
  flutter: "#3B9FE0",
  dart: "#2E97E0",
  dotnet: "#8C6DF0",
};

export type TechIconSlug = keyof typeof ICONS;

/** Brand color for a slug, contrast-corrected for the dark background.
 * Falls back to the site accent for tags that have no brand mark at all
 * (SQL Server, REST APIs, ERP integration…). */
export function getBrandColor(slug?: string): string {
  if (!slug) return "#00d2fd";
  const icon = ICONS[slug as TechIconSlug];
  if (!icon) return "#00d2fd";
  return COLOR_OVERRIDES[slug as TechIconSlug] ?? `#${icon.hex}`;
}

interface TechIconProps {
  slug: string;
  size?: number;
  color?: boolean;
}

export function TechIcon({ slug, size = 12, color = false }: TechIconProps) {
  const icon = ICONS[slug as TechIconSlug];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={VIEW_BOX_OVERRIDES[slug as TechIconSlug] ?? "0 0 24 24"}
      fill="currentColor"
      style={color ? { color: COLOR_OVERRIDES[slug as TechIconSlug] ?? `#${icon.hex}` } : undefined}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
