# React Native Project - Project Structure

## Folder and File Structure

```
first-app/
├── app/
│   ├── _layout.tsx          # Entry point for navigation using expo-router
│   ├── modal.tsx            # Modal screen
│   └── (tabs)/              # Tabs layout
│       ├── _layout.tsx      # Tabs definition and properties
│       ├── explore.tsx      # Explore screen
│       └── index.tsx        # Main screen
├── components/              # Reusable UI components
│   ├── external-link.tsx    # Component for opening external links
│   ├── haptic-tab.tsx       # Tab button with haptics on iOS
│   ├── hello-wave.tsx       # Animated text component
│   ├── parallax-scroll-view.tsx # Scrollable component with animated header
│   ├── themed-text.tsx      # Text supporting light and dark modes
│   ├── themed-view.tsx      # Container supporting light and dark modes
│   └── ui/                  # UI components
│       ├── collapsible.tsx  # Collapsible content component
│       ├── icon-symbol.tsx  # SF Symbols icons (Android/Web)
│       └── icon-symbol.ios.tsx # SF Symbols icons (iOS)
├── constants/               # Constants
│   └── theme.ts             # App colors and fonts
├── hooks/                   # Custom hooks
│   ├── use-color-scheme.ts  # Detect light/dark mode
│   ├── use-color-scheme.web.ts # Web-specific logic for mode detection (SSR/hydration)
│   └── use-theme-color.ts   # Select colors based on the mode
├── scripts/                 # Helper scripts
│   └── reset-project.js     # Script to reset the project
├── app.json                 # Expo configuration
├── eas.json                 # Expo Application Services configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Folder Descriptions

### 1. app
- Contains main screens and navigation layouts.
- `_layout.tsx` is the entry point for navigation using `expo-router`.
- The `(tabs)` folder includes tabs such as the main screen (`index.tsx`) and the explore screen (`explore.tsx`).

### 2. components
- Contains reusable UI components.
- Examples:
  - `themed-text.tsx` and `themed-view.tsx`: Support light and dark modes.
  - `parallax-scroll-view.tsx`: Scrollable component with animated effects.
  - `ui/`: UI components like icons and collapsible elements.

### 3. constants
- Contains constants such as colors and fonts in `theme.ts`.

### 4. hooks
- Contains custom hooks such as:
  - `use-color-scheme.ts`: To detect light/dark mode.
  - `use-theme-color.ts`: To select colors based on the mode.

### 5. scripts
- Contains helper scripts like `reset-project.js` to reset the project.

### 6. Configuration Files
- app.json: Expo settings such as icons and splash screen.
- eas.json: Expo Application Services settings.
- eslint.config.js: ESLint configuration.
- tsconfig.json: TypeScript configuration.
- package.json: Contains dependencies and scripts.

## Notes
- Components with `.ios.tsx` or `.web.ts` extensions define platform-specific behavior.
- To see examples of component usage, check:
  - index.tsx for using `ParallaxScrollView` with `ThemedText`.
  - explore.tsx for using animated icons.