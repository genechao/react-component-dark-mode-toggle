# Global/Component Theme Toggle Demo

A simple demo showing both a global and component-scoped theme toggle for light mode and dark mode in React (v19) and Tailwind CSS (v4).

## Getting Started

1. Install the dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173)

## Project Structure

- `src/App.tsx`: Main application component.
- `src/index.css`: Global styles. Imports Tailwind CSS, configures dark mode, and includes custom component styles.
- `src/components/theme-provider.tsx`: Provides global theme context and toggling logic for the app.
- `src/components/mode-toggle.tsx`: Global theme toggle button for the ThemeProvider.
- `src/components/component-theme-toggle/component-theme-toggle.tsx`: The reusable, component-scoped theme toggle button.
- `src/components/component-theme-toggle/component-theme-toggle-demo.tsx`: Demo component showing how to use the component-scoped theme toggle in isolation.
- `src/components/component-theme-toggle/styles.css`: Custom styles and CSS variables for the component-scoped theme toggle.

## Component Theme Toggle Usage

See [`src/components/component-theme-toggle/README.md`](src/components/component-theme-toggle/README.md) for full usage instructions, setup, and customization details.
