/** AGENT D — Section 04, Open Source (UX_AUDIT §2.5, CONTENT_STRATEGY §8). */
import { ExternalLink } from "@/components/ui/external-link";
import { SectionHeader } from "@/components/ui/section-header";
import { openSource, sectionIntros } from "@/lib/data";

/**
 * The journal's citations page: four ledger rows with identical anatomy —
 * hanging mono gutter, name (+ WINNER tag for the ForgeQuest entry, the
 * section's only accent), description, mono metadata row, verified links.
 * Calmer and more consistent than Selected Work by design.
 */
export default function OpenSource() {
  return (
    <SectionHeader id="open-source" index="04" label="OPEN SOURCE" heading="Open source">
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.openSource}</p>

      <ol className="mt-8 list-none lg:mt-10">
        {openSource.map((entry, i) => (
          <li key={entry.name} className="border-t border-line py-6 lg:py-8">
            <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
              {/* Hanging gutter: decorative row index, plus org/period when the data carries them. */}
              <div className="col-span-4 lg:col-span-3">
                <p
                  aria-hidden="true"
                  className="font-mono text-label text-ink-faint tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                {entry.org ? (
                  <p className="mt-2 font-mono text-label font-medium uppercase text-ink-muted">
                    {entry.org}
                  </p>
                ) : null}
                {entry.period ? (
                  <p className="mt-1 font-mono text-label font-medium text-ink-muted tabular-nums">
                    {entry.period}
                  </p>
                ) : null}
              </div>

              <div className="col-span-4 lg:col-span-8 lg:col-start-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-subhead font-medium text-ink">{entry.name}</h3>
                  {entry.winner === true ? (
                    <span className="inline-flex items-center bg-accent-tint px-2 py-1 font-mono text-label font-medium uppercase text-accent">
                      WINNER
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 max-w-measure text-small text-ink-2">{entry.description}</p>

                <p className="mt-3 font-mono text-meta text-ink-muted tabular-nums">{entry.meta}</p>

                {entry.links.length > 0 ? (
                  <div className="mt-3 inline-flex flex-wrap items-center gap-4">
                    {entry.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        className="inline-flex min-h-11 items-center font-mono text-label font-medium uppercase"
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </SectionHeader>
  );
}
