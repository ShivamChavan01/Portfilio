import { education, site } from "@/lib/data";
import { CalEmbed } from "./ui/cal-embed";
export default function Footer() {
  return (
    <footer
      className="profile-page profile-footer"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="profile-section-title">
        <h2 id="contact-heading">elsewhere</h2>
      </div>
      <div className="profile-about">
        <p>
          Most of my work is in TypeScript, Python, and Java. Angular and React
          on the frontend; Micronaut, FastAPI, MongoDB, and PostgreSQL behind
          it.
        </p>
        <p className="profile-note">{education}</p>
      </div>
      <div className="profile-footer-top">
        <a href={`mailto:${site.email}`} className="profile-inline-link">
          {site.email} ↗
        </a>
        <div className="profile-links">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer">
            Résumé ↗
          </a>
        </div>
      </div>
      <details className="profile-calendar">
        <summary>Pick a time to talk</summary>
        <div>
          <CalEmbed calLink="shivamchavan" label="Load calendar" />
          <p className="profile-note mt-3">
            <a
              href="https://cal.com/shivamchavan"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-inline-link"
            >
              Open calendar in a new tab ↗
            </a>
          </p>
        </div>
      </details>
      <div className="profile-colophon">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
