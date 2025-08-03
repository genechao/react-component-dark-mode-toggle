// App-wide dark mode toggle - theme provider
// Source: https://ui.shadcn.com/docs/dark-mode/vite
//
// NOTE: If you are using the full Shadcn install (e.g. after running
// `npx shadcn-ui@latest init`), you do NOT need to add the Tailwind v4
// dark mode configuration below.
//
// CRITICAL REQUIREMENT (for non-Shadcn setups): For this ThemeProvider to work
// with Tailwind v4 dark: utilities, you MUST add this configuration to your
// main CSS file (e.g., `src/index.css`) after `@import "tailwindcss"`:
//
//   @custom-variant dark (&:is(.dark *));
//
// 1. This ThemeProvider adds/removes the `.dark` class on
//    document.documentElement (the <html> tag)
// 2. Tailwind v4 doesn't automatically know how to handle dark: modifiers
//    with class-based dark mode
//
import { useEffect, useState } from "react";
import { ThemeProviderContext } from "./theme-context";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  // storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  // storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    // () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      // localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
