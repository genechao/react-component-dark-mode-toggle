import React from "react";

export type ComponentTheme = "light" | "dark";

export interface ComponentThemeToggleProps {
  theme: ComponentTheme;
  setTheme: (theme: ComponentTheme) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ComponentThemeToggle({
  theme,
  setTheme,
  className,
  style,
}: ComponentThemeToggleProps) {
  return (
    <button
      type="button"
      // inline-flex: Makes the button an inline flex container for icon/text alignment.
      // items-center: Vertically centers children in the flex container.
      // justify-center: Horizontally centers children in the flex container.
      // gap-2: Adds horizontal spacing between icon and text.
      // whitespace-nowrap: Prevents text from wrapping.
      // rounded-md: Applies medium border radius for rounded corners.
      // text-sm: Sets the font size to small.
      // font-medium: Applies medium font weight.
      // transition-colors: Enables smooth color transitions on hover/focus.
      // px-2 py-2: Adds horizontal (0.5rem) and vertical (0.5rem) padding.
      // focus-visible:outline-none: Removes default outline except when focused via keyboard.
      // focus-visible:ring-2: Adds a 2px ring on keyboard focus.
      // focus-visible:ring-ring/50: Applies a semi-transparent ring color.
      // disabled:pointer-events-none: Disables pointer events when button is disabled.
      // disabled:opacity-50: Reduces opacity when button is disabled.
      // cursor-pointer: Shows pointer cursor on hover.
      // hover:opacity-90: Slightly reduces opacity on hover for feedback.
      // component-theme-toggle-dark/component-theme-toggle-light: Applies theme-specific styles for the button.
      // bg-[var(--component-theme-toggle-primary-foreground)]: Set background to reverse of theme color.
      // text-[var(--component-theme-toggle-primary)]: Set text color to reverse of theme color.
      // className: Allows parent to pass additional classes for further customization.
      className={
        [
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:opacity-90",
          theme === "dark"
            ? "component-theme-toggle-dark"
            : "component-theme-toggle-light",
          "bg-[var(--component-theme-toggle-primary-foreground)] text-[var(--component-theme-toggle-primary)]",
          className
        ].filter(Boolean).join(" ")
      }
      style={style}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle component theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
