import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { UseTheme } from 'app/providers/ThemeContextProvider';
import { IconsTheme } from 'shared/assets/icons/IconsTheme';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = UseTheme();
  return (
    <Button
      theme={ThemeButton.SWITCH}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toogleTheme}>
      <IconsTheme fill={`${theme === 'light' ? '#000' : '#fff'}`} />
    </Button>
  );
};