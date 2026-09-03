import { ExternalLink } from "@/components/ui/external-link";
import { MonoLabel } from "@/components/ui/mono-label";
import { SpecTable } from "@/components/ui/spec-table";
import type { WorkEntry } from "@/lib/data";
import { EntryIndex } from "./bits";

/**
 * Pattern A — "The Dossier" (UX_AUDIT Part 5): 2/3 narrative + 1/3 spec-sheet
 * split. Flagship treatment only: the descriptor line is set in display serif
 * italic (per the Selected Work implementation brief).
 */
export default function DossierEntry({ entry }: { entry: WorkEntry }) {
  // STATUS derives from the entry's own data: an open-source descriptor plus a
  // "Live" link → "OPEN SOURCE · LIVE". No status copy is hardcoded here.
  const status = [
    /open source/i.test(entry.descriptor) ? "Open source" : null,
    entry.links.some((link) => link.label.toLowerCase() === "live") ? "Live" : null,
  ]
    .filter(Boolean)
    .join(" · ")
    .toUpperCase();

  // Hero metric = the entry's first spec item ("300+ tests"), split into the
  // serif display value and its mono key, per DESIGN_SYSTEM §5.5.
  const metric = entry.spec[0] ?? "";
  const spaceAt = metric.indexOf(" ");
  const metricValue = spaceAt === -1 ? metric : metric.slice(0, spaceAt);
  const metricUnit = spaceAt === -1 ? "" : metric.slice(spaceAt + 1);

  return (
    <article className="border-t border-line py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-baseline gap-x-4">
            <EntryIndex index={entry.index} />
            <h3 className="text-subhead text-ink">{entry.name}</h3>
          </div>
          <p className="mt-6 max-w-measure font-display text-display italic text-ink">
            {entry.descriptor}
          </p>
          <p className="mt-6 max-w-measure text-body text-ink-2">{entry.summary}</p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-meta text-ink-muted">
            <MonoLabel>Role</MonoLabel>
            <span>{entry.role}</span>
          </p>
        </div>
        <aside aria-label={`${entry.name} spec sheet`} className="lg:col-span-3 lg:col-start-10">
          <SpecTable
            rows={[
              {
                key: "Stack",
                value: <span className="font-mono text-meta text-ink-2">{entry.stack.join(" · ")}</span>,
              },
              {
                key: "Year",
                value: <span className="font-mono text-meta tabular-nums text-ink-2">{entry.year}</span>,
              },
              {
                key: "Status",
                value: <span className="font-mono text-meta text-ink-2">{status}</span>,
              },
              {
                key: metricUnit.toUpperCase(),
                value: <span className="font-display text-display text-ink">{metricValue}</span>,
              },
              ...entry.links.map((link) => ({
                key: link.label.toUpperCase(),
                value: (
                  <ExternalLink href={link.href} className="inline-block py-2 text-small">
                    {link.label}
                  </ExternalLink>
                ),
              })),
            ]}
          />
        </aside>
      </div>
    </article>
  );
}
