"use client";

// H4 : useContext. Le thème est partagé sans être passé de parent en enfant.
import { createContext, useContext, useState } from "react";

type ThemeValue = { dark: boolean; toggle: () => void };

const ThemeContext = createContext<ThemeValue>({ dark: false, toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
      {/* La classe .dark active les variantes dark: de Tailwind (voir globals.css) */}
      <div
        className={`min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 ${
          dark ? "dark" : ""
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
