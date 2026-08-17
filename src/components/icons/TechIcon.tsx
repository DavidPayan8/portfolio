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

export type TechIconSlug = keyof typeof ICONS;

interface TechIconProps {
  slug: string;
  size?: number;
}

export function TechIcon({ slug, size = 12 }: TechIconProps) {
  const icon = ICONS[slug as TechIconSlug];
  if (!icon) return null;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
