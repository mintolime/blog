import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui';
interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const [collabsed, setCollapsed] = useState(false);
  const handleToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.SideBar, { [cls.collabsed]: collabsed }, [className])}>
      <Button onClick={handleToggleClick}>toogle</Button>
      <div className="switchers">
        <ThemeSwitcher />
      </div>
    </div>
  );
};