"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

type Theme = "light" | "dark";

/**
 * Theme toggle: icon button (moon/sun). The theme is applied pre-paint by
 * the inline script in layout.tsx (stored choice, dark by default); this
 * component reads/applies state after mount — no hydration mismatch.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
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

  // Icon shows the CURRENT theme: sun in light, moon in dark.
  const Icon = mounted && theme === "dark" ? MoonIcon : SunIcon;
  const label = mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Toggle theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={theme === "dark" ? "Dark mode" : "Light mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors duration-150 hover:text-ink-2"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
