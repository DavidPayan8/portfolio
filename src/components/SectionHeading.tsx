interface SectionHeadingProps {
  index: string;
  title: string;
  id: string;
  /** Highlights the rule while this section is the one being read. */
  isActive?: boolean;
}

export function SectionHeading({ index, title, id, isActive = false }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className={`font-code-sm text-code-sm shrink-0 transition-colors duration-500 ${
          isActive ? "text-secondary-container" : "text-on-surface-variant"
        }`}
        aria-hidden="true"
      >
        {index}
      </span>
      <h2 id={id} className="font-headline-lg text-headline-lg text-on-surface">
        {title}
      </h2>
      <div
        className={`h-px flex-1 hidden sm:block transition-colors duration-500 ${
          isActive ? "bg-secondary-container" : "bg-outline-variant/30"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
