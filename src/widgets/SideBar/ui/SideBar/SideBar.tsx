import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const { t } = useTranslation('button');
  const [collabsed, setCollapsed] = useState(false);
  const handleToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.SideBar, { [cls.collabsed]: collabsed }, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={handleToggleClick}>
        {collabsed ? `${t('Показать')}` : `${t('Свернуть')}`}
      </Button>
      <div className="switchers">
        <LangSwitcher className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
