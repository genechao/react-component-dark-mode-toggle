import React from "react";
import { ComponentThemeToggle } from "./component-theme-toggle";

export interface ComponentThemeToggleDemoProps {
  className?: string;
  style?: React.CSSProperties;
}

export function ComponentThemeToggleDemo({ className, style }: ComponentThemeToggleDemoProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
  );
  return (
    /* Root container
       component-theme-toggle-dark/component-theme-toggle-light: Applies theme-specific styles for the demo area.
       relative: Ensures absolutely positioned children (like the toggle button) are placed relative to this container. */
    <div
      data-component-theme-toggle={theme}
      className={
        [
          (theme === "dark" ? "component-theme-toggle-dark" : "component-theme-toggle-light"),
          "relative",
          className
        ].filter(Boolean).join(" ")
      }
      style={style}
    >
      {/* Component theme toggle button
          absolute: Removes the element from normal flow and positions it absolutely.
          top-4: Aligns the button with the top edge of the parent, 1rem from the top.
          right-4: Aligns the button with the right edge of the parent, 1rem from the right.
          z-10: Ensures the button appears above other content. */}
      <div className="absolute top-4 right-4 z-10">
        <ComponentThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      {/* Main content container */}
      <div>
        {/* text-2xl: Sets the font size to extra-extra-large for the heading.
            font-bold: Makes the heading text bold.
            text-center: Centers the heading text horizontally.
            mb-8: Adds bottom margin (2rem) below the heading. */}
        <h1 className="text-2xl font-bold text-center mb-8">
          Demo Component
        </h1>
        {/* text-center: Centers the paragraph text horizontally.
            mb-4: Adds bottom margin (1rem) below the paragraph.
            component-theme-toggle-light:bg-purple-200: Demonstrates overriding light mode color.
            component-theme-toggle-dark:bg-purple-800: Demonstrates overriding dark mode color. */}
        <p
          className="
            text-center mb-4
            component-theme-toggle-light:bg-purple-200 component-theme-toggle-dark:bg-purple-800
          "
        >
          This is a basic demo of the reusable, component-scoped theme toggle.
        </p>
      </div>
    </div>
  );
}
