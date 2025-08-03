# Component Theme Toggle

A reusable, component-scoped theme toggle for React + Tailwind v4 using light/dark classes and custom variants.

## Usage

1. Import the CSS in your main CSS file (e.g., `src/index.css`):

```css
@import "./components/component-theme-toggle/styles.css";
```

2. Use the component in your code:

```tsx
import { ComponentThemeToggle } from "@/components/component-theme-toggle";

function MyComponent() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  return (
    <div
      data-component-theme-toggle={theme}
      className={theme === "dark" ? "component-theme-toggle-dark" : "component-theme-toggle-light"}
    >
      <ComponentThemeToggle theme={theme} setTheme={setTheme} />
      {/* ...rest of your component... */}
    </div>
  );
}
```

- The `component-theme-toggle-dark` and `component-theme-toggle-light` classes should be applied to the main wrapper div to ensure the correct color scheme is used for all children.
- The color scheme is isolated to the component, regardless of the global theme.
- To override styles contextually, use the custom-variant specifier (e.g., `component-theme-toggle-dark:bg-pink-800`) in your className or CSS, which will only apply when the parent has the matching data attribute.
