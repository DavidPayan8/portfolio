interface IconProps {
  size?: number;
}

export function ExpandIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3H4v5" />
      <path d="M15 3h5v5" />
      <path d="M9 21H4v-5" />
      <path d="M15 21h5v-5" />
    </svg>
  );
}
