/** AGENT E — Section 02, Case Studies (UX_AUDIT §2.3, DESIGN_SYSTEM §5.6). */
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyPanels from "./case-studies/panels";

export default function CaseStudies() {
  return (
    <SectionHeader
      id="case-studies"
      index="02"
      label="CASE STUDIES"
      heading="Case studies"
      counter={`${caseStudies.length} CASE STUDIES`}
    >
      <CaseStudyPanels />
    </SectionHeader>
  );
}
