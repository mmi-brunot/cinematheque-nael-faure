"use client";

import { useTheme } from "./providers/ThemeProvider";

// H4 : n'importe quel composant client lit le thème avec useTheme().
export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
    >
      {dark ? "Thème clair" : "Thème sombre"}
    </button>
  );
}
