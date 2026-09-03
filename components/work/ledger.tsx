import { MonoLabel } from "@/components/ui/mono-label";
import { SpecTable } from "@/components/ui/spec-table";
import type { WorkEntry } from "@/lib/data";
import { EntryIndex, WorkLinks } from "./bits";

/**
 * Pattern B — "The Pipeline Ledger" (UX_AUDIT Part 5): the only entry with a
 * numbered process list. Step verbs/nouns restate work[1].summary verbatim
 * (lib/data.ts → docs/FACTS.md "MCP Foundry"): parse any OpenAPI spec, LLM
 * rewrite of ambiguous descriptions, live-agent eval on an isolated Prism
 * mock, auto-repair bounded at 3 rounds / 4 prompt classes, registration into
 * Codex's MCP config with a pass/fail scorecard.
 */
const pipelineSteps = [
  { verb: "Parse", text: "any OpenAPI spec" },
  { verb: "Rewrite", text: "ambiguous descriptions (LLM)" },
  { verb: "Evaluate", text: "against a live agent on an isolated Prism mock" },
  { verb: "Auto-repair", text: "failing tools, up to 3 rounds, 4 prompt classes" },
  { verb: "Register", text: "into Codex's MCP config with a pass/fail scorecard" },
] as const;

/**
 * Hanging left column (year, context, stack, links); right column carries the
 * descriptor, summary, then the five-stage process. On mobile: name, meta,
 * then prose + steps. The lg grid auto-places the name row above the
 * meta/content pair, journal-style.
 */
export default function LedgerEntry({ entry }: { entry: WorkEntry }) {
  return (
    <article className="border-t border-line py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-5">
          <div className="flex flex-wrap items-baseline gap-x-4">
            <EntryIndex index={entry.index} />
            <h3 className="text-subhead text-ink">{entry.name}</h3>
          </div>
        </div>
        <div className="lg:col-span-3">
          <SpecTable
            rows={[
              {
                key: "Year",
                value: <span className="font-mono text-meta tabular-nums text-ink-2">{entry.year}</span>,
              },
              {
                key: "Context",
                value: <span className="font-mono text-meta text-ink-2">{entry.role}</span>,
              },
              {
                key: "Stack",
                value: <span className="font-mono text-meta text-ink-2">{entry.stack.join(" · ")}</span>,
              },
              { key: "Links", value: <WorkLinks links={entry.links} /> },
            ]}
          />
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <p className="max-w-measure text-lead text-ink-2">{entry.descriptor}</p>
          <p className="mt-4 max-w-measure text-body text-ink-2">{entry.summary}</p>
          <div className="mt-8 lg:mt-10">
            <MonoLabel>Pipeline</MonoLabel>
            <ol className="mt-3">
              {pipelineSteps.map((step, i) => (
                <li key={step.verb} className="flex gap-4 border-t border-line py-3">
                  <span
                    aria-hidden="true"
                    className="shrink-0 pt-1.5 font-mono text-label text-ink-faint"
                  >
                    0{i + 1}
                  </span>
                  <p className="text-small text-ink-2">
                    <span className="mr-3 font-mono text-label font-medium uppercase text-ink">
                      {step.verb}
                    </span>
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
