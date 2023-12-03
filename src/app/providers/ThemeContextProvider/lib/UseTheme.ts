import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME, Theme } from '../types/type';

export interface ThemeResult {
  theme: Theme;
  toogleTheme: () => void;
}

export function UseTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  };
  return {
    theme,
    toogleTheme,
  };
}
