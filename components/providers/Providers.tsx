"use client";

import { FavoritesProvider } from "./FavoritesProvider";
import { SeancesProvider } from "./SeancesProvider";
import { ThemeProvider } from "./ThemeProvider";

// Regroupe les contextes client pour garder layout.tsx lisible.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <SeancesProvider>{children}</SeancesProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
