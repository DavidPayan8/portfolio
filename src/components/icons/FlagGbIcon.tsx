import { useId } from "react";

interface IconProps {
  size?: number;
}

export function FlagGbIcon({ size = 18 }: IconProps) {
  const clipId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <clipPath id={clipId}>
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="24" height="24" fill="#00247d" />
        <path d="M0 0 L24 24 M24 0 L0 24" stroke="#fff" strokeWidth="5" />
        <path d="M0 0 L24 24 M24 0 L0 24" stroke="#cf142b" strokeWidth="2" />
        <path d="M12 0 V24 M0 12 H24" stroke="#fff" strokeWidth="8" />
        <path d="M12 0 V24 M0 12 H24" stroke="#cf142b" strokeWidth="4.5" />
      </g>
    </svg>
  );
}
