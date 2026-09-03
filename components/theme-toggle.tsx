"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Theme toggle: mono text button in the nav. Shows the theme it switches TO.
 * The actual theme is applied pre-paint by the inline script in layout.tsx
 * (localStorage → prefers-color-scheme fallback), so this component only
 * reads/applies state after mount — no hydration mismatch, no flash.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable — theme applies for this visit only
    }
    setTheme(next);
  };

  // First client render mirrors the server output (label "DARK"); the real
  // state lands after mount. Button box is stable so the nav never shifts.
  const label = mounted ? (theme === "dark" ? "LIGHT" : "DARK") : "DARK";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Toggle theme"}
      className="inline-flex h-11 items-center border border-line px-2 font-mono text-label font-medium uppercase text-ink-muted transition-colors duration-150 hover:border-line-strong hover:text-ink sm:px-3"
    >
      {label}
    </button>
  );
}
