import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

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
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collabsed]: collabsed }, [className])}
        >
            <Button
                data-testid="sidebar-toogle"
                theme={ThemeButton.TRANSPARENT}
                onClick={handleToggleClick}
                size={SizeButton.XL}
            >
                {collabsed ? `${t('Показать')}` : `${t('Свернуть')}`}
            </Button>
            {!collabsed && (
                <div className={cls.switchers}>
                    <LangSwitcher className={cls.lang} />
                    <ThemeSwitcher />
                </div>
            )}
        </div>
    );
};
