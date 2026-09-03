/** AGENT B — Section 01, Selected Work (UX_AUDIT §2.2 + Part 5). */
import { SectionHeader } from "@/components/ui/section-header";
import type { WorkEntry } from "@/lib/data";
import { sectionIntros, work } from "@/lib/data";
import DossierEntry from "./work/dossier";
import FieldReportEntry from "./work/field-report";
import FootnoteEntry from "./work/footnote";
import IndexCardEntry from "./work/index-card";
import LedgerEntry from "./work/ledger";

/** Dispatch each entry to its named layout pattern — no two adjacent alike. */
function WorkEntryArticle({ entry }: { entry: WorkEntry }) {
  switch (entry.pattern) {
    case "dossier":
      return <DossierEntry entry={entry} />;
    case "ledger":
      return <LedgerEntry entry={entry} />;
    case "fieldReport":
      return <FieldReportEntry entry={entry} />;
    case "indexCard":
      return <IndexCardEntry entry={entry} />;
    case "footnote":
      return <FootnoteEntry entry={entry} />;
  }
}

export default function SelectedWork() {
  return (
    <SectionHeader id="work" index="01" label="SELECTED WORK" heading="Selected work" counter="5 PROJECTS">
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.work}</p>
      <div className="mt-8 lg:mt-10">
        {work.map((entry) => (
          <WorkEntryArticle key={entry.slug} entry={entry} />
        ))}
      </div>
    </SectionHeader>
  );
}
