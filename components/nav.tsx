"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";

/**
 * Sticky top bar: brand left, mono index-prefixed anchors right.
 * Scroll-spy via IntersectionObserver — active anchor = accent text + 2px
 * accent underline. Mobile keeps only the anchors listed in nav.mobile;
 * no hamburger, no drawer (single-scroll page, per UX_AUDIT §2.8).
 */

const mobileAnchors: ReadonlySet<number> = new Set(nav.mobile);

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav.anchors
      .map((anchor) => document.getElementById(anchor.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    // Active = the section spanning a line 35% from the viewport top. Sections
    // are contiguous, so exactly one spans the line below the hero. The last
    // section wins once it peeks into the viewport — a short final section
    // never crosses the line, but its first on-screen pixel is IO-observable.
    const compute = () => {
      const viewportHeight = window.innerHeight;
      const line = viewportHeight * 0.35;
      let next: string | null = null;
      const last = sections[sections.length - 1];
      if (last.getBoundingClientRect().top < viewportHeight) {
        next = last.id;
      } else {
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= line && rect.bottom > line) {
            next = section.id;
            break;
          }
        }
      }
      setActiveId(next);
    };

    // Observation band runs from 35% of the viewport down to its bottom — its
    // boundaries are exactly the scroll positions where the answer can change.
    const observer = new IntersectionObserver(compute, {
      rootMargin: "-35% 0px 0px 0px",
      threshold: 0,
    });
    for (const section of sections) observer.observe(section);
    compute();

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip link: first focusable element, revealed on keyboard focus. */}
      <a
        href="#main"
        className="absolute left-0 top-0 z-100 -translate-y-20 bg-ink px-4 py-2 text-small font-medium text-bg focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-bg">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-6 lg:px-10"
        >
          <div className="min-w-0">
            <p className="truncate text-small font-medium text-ink sm:text-body">
              {site.name}
              <span className="hidden font-mono text-label font-medium uppercase text-ink-muted lg:inline">
                {" · "}
                {site.title}
              </span>
            </p>
          </div>
          <ul className="flex shrink-0 items-center gap-1.5 sm:gap-4 lg:gap-6">
            {nav.anchors.map((anchor, i) => {
              const isActive = activeId === anchor.href.slice(1);
              return (
                <li key={anchor.href} className={mobileAnchors.has(i) ? "" : "hidden sm:block"}>
                  <a
                    href={anchor.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex min-h-[44px] items-center whitespace-nowrap py-3 font-mono text-label font-medium uppercase underline-offset-[6px] transition-colors duration-150 ${
                      isActive
                        ? "text-accent underline decoration-accent decoration-2"
                        : "text-ink-muted hover:text-ink hover:underline hover:decoration-line-strong"
                    }`}
                  >
                    <span aria-hidden="true" className="mr-1.5 hidden md:inline">
                      {anchor.index}
                    </span>
                    {anchor.label}
                  </a>
                </li>
              );
            })}
            <li aria-hidden="true" className="mx-1 hidden h-4 w-px bg-line sm:block" />
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
