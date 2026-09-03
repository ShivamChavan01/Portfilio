import { SpecRow } from "@/components/ui/spec-row";
import type { WorkEntry } from "@/lib/data";
import { EntryIndex, WorkLinks } from "./bits";

/**
 * Pattern E — "The Footnote Row" (UX_AUDIT Part 5): the numbers are the whole
 * entry. Two lines — index/name/year, then the spec row plus the single
 * verified link. No prose, no stack: closing the index with the smallest
 * entry creates the descending-weight rhythm.
 */
export default function FootnoteEntry({ entry }: { entry: WorkEntry }) {
  return (
    <article className="border-t border-line py-8 lg:py-10">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <EntryIndex index={entry.index} />
        <h3 className="text-subhead text-ink">{entry.name}</h3>
        <span className="ml-auto font-mono text-meta tabular-nums text-ink-muted">{entry.year}</span>
      </div>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-6 gap-y-1">
        <SpecRow items={entry.spec} />
        <WorkLinks links={entry.links} />
      </div>
    </article>
  );
}
