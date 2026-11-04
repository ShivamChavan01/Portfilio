import { nav } from "@/lib/data";
import ThemeToggle from "./theme-toggle";
export default function Nav() {
  const visible: ReadonlySet<number> = new Set(nav.mobile);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="profile-page profile-nav">
        <a className="profile-handle" href="#main">
          <span className="profile-monogram">sc.</span>
          <span className="profile-nav-caption">Shivam Chavan</span>
          <span aria-hidden="true" className="text-ink-faint">
            {" "}
            01 — 09
          </span>
        </a>
        <nav className="profile-nav-links" aria-label="Primary">
          {nav.anchors.map((anchor, i) => (
            <a
              key={anchor.href}
              className={visible.has(i) ? "" : "optional hidden sm:inline"}
              href={anchor.href}
            >
              {anchor.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
