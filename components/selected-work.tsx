/**
 * Section 01 · Selected Work — expandable editorial rows:
 * title + year + one-liner always visible; full summary + full tech
 * stack behind a Show more toggle (collapsed copy stays server-rendered
 * for crawlers / no-JS readers).
 */
import { SectionHeader } from "@/components/ui/section-header";
import { sectionIntros, work } from "@/lib/data";
import WorkRows from "./selected-work/rows";

export default function SelectedWork() {
  return (
    <SectionHeader
      id="work"
      index="01"
      label="SELECTED WORK"
      counter={`${work.length} PROJECTS`}
    >
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.work}</p>

      <WorkRows />
    </SectionHeader>
  );
}
