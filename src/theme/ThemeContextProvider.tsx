import { FC, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME, Theme } from './type';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // useMemo позволяет сохранить значения предыдущего объекта, если он не изменился
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;