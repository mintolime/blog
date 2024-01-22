import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Applink } from 'shared/ui/AppLink/Applink';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <Applink to="/">{t('Главная')}</Applink>
                <Applink to="/news">{t('Новости')}</Applink>
            </div>
        </div>
    );
};
