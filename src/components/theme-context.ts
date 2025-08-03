// App-wide dark mode toggle - theme provider context
// Source: https://ui.shadcn.com/docs/dark-mode/vite
import { createContext, useContext } from "react";
import type { Theme } from "./theme-provider";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
