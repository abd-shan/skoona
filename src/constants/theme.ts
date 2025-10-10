import { Platform } from 'react-native';

const lightPrimary = '#6ED47C';
const darkPrimary = '#6ED47C';

export const Colors = {
  light: {
    text: '#1C2B1C',
    background: '#F9FFF9',
    tint: lightPrimary,
    icon: '#5BAF67',
    tabIconDefault: '#A7D7A2',
    tabIconSelected: lightPrimary,
    accent: '#77C7F7',
    border: '#CDEAC0',
  },
  dark: {
    text: '#DFFFE0',
    background: '#0E1A0E',
    tint: darkPrimary,
    icon: '#A1E1AE',
    tabIconDefault: '#4A6F4A',
    tabIconSelected: darkPrimary,
    accent: '#5AB8E8',
    border: '#1C331C',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', Meiryo, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});
