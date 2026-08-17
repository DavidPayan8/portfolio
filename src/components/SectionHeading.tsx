interface SectionHeadingProps {
  index: string;
  title: string;
  id: string;
}

export function SectionHeading({ index, title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="h-px flex-1 bg-outline-variant/30 hidden sm:block" aria-hidden="true" />
      <span className="font-code-sm text-code-sm text-secondary-container shrink-0" aria-hidden="true">
        {index}
      </span>
      <h2 id={id} className="font-headline-lg text-headline-lg text-on-surface text-center">
        {title}
      </h2>
      <div className="h-px flex-1 bg-outline-variant/30 hidden sm:block" aria-hidden="true" />
    </div>
  );
}
