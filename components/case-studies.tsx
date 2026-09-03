/** Section 02, Case Studies — expandable deep-dive panels. */
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyPanels from "./case-studies/panels";

export default function CaseStudies() {
  return (
    <SectionHeader
      id="case-studies"
      index="02"
      label="CASE STUDIES"
      counter={`${caseStudies.length} CASE STUDIES`}
    >
      <CaseStudyPanels />
    </SectionHeader>
  );
}
