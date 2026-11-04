import { caseStudies } from "@/lib/case-studies";
import CaseStudyPanels from "./case-studies/panels";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="profile-page profile-section notes-section" aria-labelledby="case-studies-heading">
      <div className="notes-heading">
        <div>
          <p className="profile-eyebrow">From the workbench</p>
          <h2 id="case-studies-heading">Engineering notes<span>.</span></h2>
        </div>
        <span className="notes-count">{String(caseStudies.length).padStart(2, "0")} notes</span>
      </div>
      <p className="notes-intro">A closer look at the choices behind the code. Pick a project to read its notes.</p>
      <CaseStudyPanels />
    </section>
  );
}
