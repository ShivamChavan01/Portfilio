import { SpecRow } from "@/components/ui/spec-row";
import type { WorkEntry } from "@/lib/data";
import { EntryIndex, WorkLinks } from "./bits";

/**
 * Pattern D — "The Index Card" (UX_AUDIT Part 5): a row that grew exactly two
 * extra lines. Row 1: index, name, stack truncated to 3 items + "+n", year
 * right-aligned. Row 2: the descriptor sentence. Row 3: spec row + link cells.
 */
export default function IndexCardEntry({ entry }: { entry: WorkEntry }) {
  const shown = entry.stack.slice(0, 3);
  const hidden = entry.stack.length - shown.length;

  return (
    <article className="border-t border-line py-8 lg:py-10">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <EntryIndex index={entry.index} />
        <h3 className="text-subhead text-ink">{entry.name}</h3>
        <span className="font-mono text-meta text-ink-muted">
          {shown.map((item, i) => (
            <span key={item}>
              {i > 0 && (
                <span aria-hidden="true" className="mx-2 text-ink-faint">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
          {hidden > 0 && <span className="ml-2">+{hidden}</span>}
        </span>
        <span className="ml-auto font-mono text-meta uppercase tabular-nums text-ink-muted">
          {entry.year}
        </span>
      </div>
      <p className="mt-3 max-w-measure text-small text-ink-2">{entry.descriptor}</p>
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <SpecRow items={entry.spec} />
        <WorkLinks links={entry.links} className="justify-start lg:justify-end" />
      </div>
    </article>
  );
}
