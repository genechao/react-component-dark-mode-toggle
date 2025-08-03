// App-wide dark mode toggle - toggle button
import { useTheme } from "./theme-context";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const effectiveTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      className={
        [
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:opacity-90",
          "bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900"
        ].filter(Boolean).join(" ")
      }
      onClick={() => setTheme(effectiveTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {effectiveTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
