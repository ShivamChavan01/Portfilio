import { InternalLink } from "@/components/ui/external-link";
import { MonoLabel } from "@/components/ui/mono-label";
import type { WorkEntry } from "@/lib/data";
import { EntryIndex } from "./bits";

/**
 * Booking-platform scope — the verbatim facets of work[2].summary (lib/data.ts,
 * from docs/FACTS.md "Engineered a class booking platform…"): slot scheduling,
 * recurring series, waitlist promotion, biometric check-in, session
 * deduction/refund lifecycle, correctness under concurrent writes.
 */
const bookingScope = [
  "Slot scheduling",
  "Recurring class series",
  "Waitlist promotion",
  "Biometric check-in",
  "Session deduction/refund lifecycle",
  "Correctness under concurrent writes",
] as const;

/**
 * Pattern C — "The Field Report" (UX_AUDIT Part 5): leads with proof. First
 * line is the spec strip rendered large in mono; the CURRENT tag is this
 * entry's only accent element; the single affordance is the in-page
 * `Case study ↓` link (Strivo has no external link in FACTS).
 */
export default function FieldReportEntry({ entry }: { entry: WorkEntry }) {
  return (
    <article className="border-t border-line py-8 lg:py-10">
      <p className="font-mono text-small tabular-nums text-ink sm:text-base">
        {entry.spec.map((item, i) => (
          <span key={item}>
            {i > 0 && (
              <span aria-hidden="true" className="mx-2 text-ink-faint">
                ·
              </span>
            )}
            {item}
          </span>
        ))}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <EntryIndex index={entry.index} />
        <h3 className="text-subhead text-ink">{entry.name}</h3>
        <span className="bg-accent-tint px-2 py-1 font-mono text-label font-medium uppercase text-accent">
          Current
        </span>
        <span className="ml-auto font-mono text-meta tabular-nums text-ink-muted">{entry.year}</span>
      </div>
      <p className="mt-6 max-w-measure text-body text-ink-2">{entry.summary}</p>
      <div className="mt-8">
        <MonoLabel>Booking platform scope</MonoLabel>
        <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {bookingScope.map((item) => (
            <li key={item} className="text-small text-ink-2">
              <span aria-hidden="true" className="mr-2 text-ink-faint">
                –
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {entry.caseStudyHref ? (
        <p className="mt-8">
          <InternalLink
            href={entry.caseStudyHref}
            className="inline-block py-2 font-mono text-label font-medium uppercase"
          >
            Case study{" "}
            <span aria-hidden="true" className="ml-1">
              ↓
            </span>
          </InternalLink>
        </p>
      ) : null}
    </article>
  );
}
