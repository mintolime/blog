import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation('button');
    // eslint-disable-next-line no-restricted-globals
    const toogleUpdate = () => location.reload();
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Ресурс временно недоступен , ожидайте восстановления')}</p>
            <Button theme={ThemeButton.WARNING} onClick={toogleUpdate}>{t('Обновить')}</Button>
        </div>
    );
};
