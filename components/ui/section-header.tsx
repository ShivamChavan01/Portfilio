import type { ReactNode } from "react";

/**
 * Numbered section shell: full-width hairline, hanging mono eyebrow in the
 * left gutter (lg), sentence-case heading + optional mono counter in the
 * content column. Children render below the header inside the container.
 */
export function SectionHeader({
  id,
  index,
  label,
  heading,
  counter,
  children,
}: {
  id: string;
  index: string;
  label: string;
  heading: string;
  counter?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line">
      <div className="mx-auto max-w-page px-5 sm:px-6 lg:px-10">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="col-span-4 lg:col-span-3">
              <p className="font-mono text-label font-medium uppercase text-ink-muted">
                <span aria-hidden="true">{index} · </span>
                {label}
              </p>
            </div>
            <div className="col-span-4 mt-3 lg:col-span-8 lg:col-start-5 lg:mt-0">
              <div className="flex items-baseline justify-between gap-4">
                <h2 id={`${id}-heading`} className="text-heading text-ink">
                  {heading}
                </h2>
                {counter ? (
                  <span className="font-mono text-meta text-ink-muted">{counter}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-10 lg:mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
