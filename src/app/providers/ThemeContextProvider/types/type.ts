export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface ThemeContextProps {
  theme?:Theme;
  setTheme?:(theme:Theme) => void
}

export const LOCAL_STORAGE_THEME = 'theme';
