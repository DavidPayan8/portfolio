import { siAngular, siDart, siDotnet, siFlutter, siLaravel, siNodedotjs, siRedsys } from "simple-icons";

const ICONS = {
  angular: siAngular,
  nodedotjs: siNodedotjs,
  laravel: siLaravel,
  flutter: siFlutter,
  dart: siDart,
  dotnet: siDotnet,
  redsys: siRedsys,
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
