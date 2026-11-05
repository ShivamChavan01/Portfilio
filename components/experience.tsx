import { experience } from "@/lib/data";
export default function Experience() {
  return (
    <section id="experience" className="profile-page profile-section experience-section" aria-labelledby="experience-heading">
      <div className="experience-intro">
        <p className="profile-eyebrow">Experience</p>
        <h2 id="experience-heading">Work, in practice.</h2>
        <p>Product work, from the first implementation to keeping it running.</p>
      </div>
      <article className="experience-entry">
        <div className="experience-period"><span className="experience-dot" aria-hidden="true" />Oct 2025 — Present</div>
        <h3>{experience.role}</h3>
        <div className="experience-company">{experience.org} <span>↗ {experience.location}</span></div>
        <p className="experience-platform">{experience.platform}</p>
        <p className="experience-framing">{experience.framing}</p>
        <ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        <a className="profile-inline-link" href="#case-study-strivo">Read the Strivo engineering notes ↗</a>
      </article>
    </section>
  );
}
