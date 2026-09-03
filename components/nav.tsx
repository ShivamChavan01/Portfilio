"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";

/**
 * Sticky top bar: brand left, sans links right, theme toggle last.
 * Scroll-spy via IntersectionObserver — active anchor = accent pill.
 * Mobile keeps only the anchors listed in nav.mobile; no hamburger.
 */

const mobileAnchors: ReadonlySet<number> = new Set(nav.mobile);

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav.anchors
      .map((anchor) => document.getElementById(anchor.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    // Active = the section spanning a line 35% from the viewport top; the
    // last section wins once it peeks into the viewport.
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
      <a
        href="#main"
        className="absolute left-0 top-0 z-100 -translate-y-20 bg-accent px-4 py-2 text-small font-medium text-white focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-5 sm:px-6 lg:px-10"
        >
          <div className="min-w-0">
            <p className="truncate text-small font-semibold text-ink">
              {site.name}
              <span className="hidden font-mono text-label font-medium uppercase text-ink-muted lg:inline">
                {" · "}
                {site.title}
              </span>
            </p>
          </div>
          <ul className="flex shrink-0 items-center gap-1.5 sm:gap-4 lg:gap-5">
            {nav.anchors.map((anchor, i) => {
              const isActive = activeId === anchor.href.slice(1);
              return (
                <li key={anchor.href} className={mobileAnchors.has(i) ? "" : "hidden sm:block"}>
                  <a
                    href={anchor.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-2.5 py-2 text-small transition-colors duration-150 sm:px-3 ${
                      isActive
                        ? "bg-accent-tint font-medium text-accent"
                        : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {anchor.label.charAt(0) + anchor.label.slice(1).toLowerCase()}
                  </a>
                </li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
