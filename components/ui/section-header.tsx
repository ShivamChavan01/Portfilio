import type { ReactNode } from "react";

/**
 * Section shell: mono uppercase label with a hairline rule running to the
 * right edge (plus an optional mono counter), then children below.
 * The visible label doubles as the section's <h2> for the nav anchor.
 */
export function SectionHeader({
  id,
  index,
  label,
  counter,
  children,
}: {
  id: string;
  index: string;
  label: string;
  counter?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto max-w-page px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
      <div className="flex items-center gap-4">
        <h2
          id={`${id}-heading`}
          className="shrink-0 font-mono text-label font-medium uppercase text-ink-muted"
        >
          <span aria-hidden="true" className="text-ink-faint">
            {index} ·{" "}
          </span>
          {label}
        </h2>
        <div aria-hidden="true" className="h-px flex-1 bg-line" />
        {counter ? (
          <span className="shrink-0 font-mono text-meta text-ink-faint">{counter}</span>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
