import { intro, principles } from "@/lib/data";

/**
 * Intro — second half of region 00 (unnumbered, no section-header chrome):
 * the 87-word first-person intro, then the five engineering principles as a
 * compact ordered list hanging from hairline top rules.
 */
export default function Intro() {
  return (
    <section className="mx-auto max-w-page px-5 pb-16 sm:px-6 md:pb-24 lg:px-10 lg:pb-28">
      <p className="max-w-measure text-lead text-ink-2">{intro}</p>
      <ol className="mt-12 max-w-measure">
        {principles.map((principle, i) => (
          <li key={principle.title} className="flex gap-4 border-t border-line py-4">
            <span
              aria-hidden="true"
              className="w-8 shrink-0 font-mono text-label font-medium text-ink-faint"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-small font-medium text-ink">{principle.title}</p>
              <p className="mt-1 text-small text-ink-2">{principle.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
