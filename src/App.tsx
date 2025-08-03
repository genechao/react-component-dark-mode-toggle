import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { ComponentThemeToggleDemo } from "@/components/component-theme-toggle/component-theme-toggle-demo";
import { useEffect } from "react";

function App() {
  // Debug: Show system theme and current theme on mount
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    console.log(
      `System prefers: ${systemTheme}\n`,
      `document.documentElement.classList: ${Array.from(document.documentElement.classList).join(", ")}\n`
    );
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      {/* Root container
          min-h-screen: Ensures the app takes at least the full viewport height.
          flex flex-col: Uses flexbox with column direction for vertical stacking.
          items-center: Horizontally centers all children.
          justify-start: Aligns children to the top of the container.
          px-2: Adds horizontal padding (0.5rem) to the left and right.
          py-10: Adds vertical padding (2.5rem) to the top and bottom.
          bg-white: Sets background color to white in light mode.
          text-gray-900: Sets text color to dark gray in light mode.
          dark:bg-black: Sets background to black in dark mode.
          dark:text-gray-100: Sets text color to light gray in dark mode. */}
      <div
        className="
          min-h-screen flex flex-col items-center justify-start px-2 py-10
          bg-white text-gray-900 dark:bg-black dark:text-gray-100
        "
      >
        {/* Global theme toggle button
            fixed: Positions the element relative to the viewport, so it stays in the same place when scrolling.
            top-4: Aligns the button with the top edge of the parent, 1rem from the top.
            right-4: Aligns the button with the right edge of the parent, 1rem from the right.
            z-50: Ensures the button appears above other content. */}
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>

        {/* Main container
            mb-8: Adds bottom margin (2rem) below this section.
            max-w-xl: Sets a maximum width (36rem).
            w-full: Makes the section take full width up to the max.
            text-center: Centers all text inside this section. */}
        <div className="mb-8 max-w-xl w-full text-center">
          {/* text-3xl: Sets the font size to extra-extra-extra-large for the heading.
              font-bold: Makes the heading text bold.
              mb-8: Adds bottom margin (2rem) below the heading. */}
          <h1 className="text-3xl font-bold mb-8">Global/Component Theme Toggle Demo</h1>
          {/* mb-8: Adds bottom margin (2rem) below the paragraph. */}
          <p className="mb-8">
            This page demonstrates both a global and component-scoped theme toggle
            using Tailwind v4. The main page automatically uses the system theme
            and has a global light/dark mode toggle on the top right of the page.
            The two demo components below have their own light/dark mode toggle.
          </p>

          {/* Components with independent theme control
              rounded-lg: Applies large border radius for rounded corners.
              p-4: Adds padding (1rem) on all sides.
              mb-8: Adds bottom margin (2rem) below the component.
              border: Adds a border.
              max-w-xl: Sets a maximum width (36rem).
              w-full: Makes the box take full width up to the max.
              mx-auto: Centers the box horizontally. */}
          <ComponentThemeToggleDemo className="rounded-lg p-4 mb-8 border max-w-xl w-full mx-auto" />
          <ComponentThemeToggleDemo className="rounded-lg p-4 mb-8 border max-w-xl w-full mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
