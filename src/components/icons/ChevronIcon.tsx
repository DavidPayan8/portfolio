interface ChevronIconProps {
  direction: "left" | "right";
  size?: number;
}

export function ChevronIcon({ direction, size = 20 }: ChevronIconProps) {
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
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
