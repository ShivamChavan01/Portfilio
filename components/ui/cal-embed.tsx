"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Click-to-load Cal.com inline embed: nothing from cal.com loads until the
 * visitor opens the calendar. Uses Cal.com's official embed script with the
 * required window.Cal queue stub (defined before the script is injected),
 * and matches the site theme at open time.
 */

declare global {
  interface Window {
    Cal?: {
      (this: unknown, ...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, { (...args: unknown[]): void; q?: unknown[] }>;
      q?: unknown[][];
    };
  }
}

const CAL_ORIGIN = "https://app.cal.com";

/** Replicates the official Cal.com snippet stub (must exist before the script). */
function installCalStub(): void {
  const w = window as unknown as {
    Cal?: Window["Cal"];
  };
  if (w.Cal?.loaded) return;
  const push = (api: { q?: unknown[][] }, args: unknown[]) => {
    api.q = api.q ?? [];
    api.q.push(args);
  };
  const cal = function Cal(this: unknown, ...args: unknown[]) {
    const self = w.Cal!;
    if (!self.loaded) {
      self.ns = self.ns ?? {};
      self.q = self.q ?? [];
      const script = document.createElement("script");
      script.src = `${CAL_ORIGIN}/embed/embed.js`;
      script.async = true;
      document.head.appendChild(script);
      self.loaded = true;
    }
    if (args[0] === "init") {
      const api = function (this: unknown, ...inner: unknown[]) {
        push(api as unknown as { q?: unknown[][] }, inner);
      };
      api.q = [] as unknown[][];
      const namespace = args[1];
      if (typeof namespace === "string") {
        self.ns = self.ns ?? {};
        self.ns[namespace] = api;
        push(api, args);
        return;
      }
      push(self, args);
      return;
    }
    push(self, args);
  } as NonNullable<Window["Cal"]>;
  w.Cal = cal;
}

export function CalEmbed({ calLink, label }: { calLink: string; label: string }) {
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const initialized = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || initialized.current) return;
    initialized.current = true;
    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    try {
      installCalStub();
      window.Cal?.("init", "book", { origin: CAL_ORIGIN });
      const script = document.createElement("script");
      script.src = `${CAL_ORIGIN}/embed/embed.js`;
      script.async = true;
      script.onerror = () => setFailed(true);
      document.head.appendChild(script);
      window.Cal?.ns?.book?.("inline", {
        elementOrSelector: "#cal-inline-embed",
        config: { layout: "month_view", theme },
        calLink,
      });
    } catch {
      setFailed(true);
    }
  }, [active, calLink]);

  if (failed) {
    return (
      <p className="font-mono text-meta text-ink-muted">
        The calendar could not load right now.{" "}
        <a
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-accent"
        >
          Book on cal.com
          <span aria-hidden="true" className="ml-0.5">
            ↗
          </span>
        </a>
      </p>
    );
  }

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-small font-semibold text-white transition-colors duration-150 hover:bg-accent-hover active:translate-y-px"
      >
        {label}
      </button>
    );
  }

  return (
    <div
      id="cal-inline-embed"
      ref={containerRef}
      className="min-h-[680px] w-full overflow-hidden rounded-card border border-line bg-surface"
    />
  );
}
