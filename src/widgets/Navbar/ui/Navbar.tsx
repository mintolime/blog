import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import { Applink } from 'shared/ui/AppLink/Applink';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui';
interface NavBarProps {
  className?: string;
}
export const Navbar = ({ className }: NavBarProps) => {
  console.log(cls);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <Applink to={'/'}>Главная</Applink>
        <Applink to={'/news'}>Новости</Applink>
      </div>
    </div>
  );
};
