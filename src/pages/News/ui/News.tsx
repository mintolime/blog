import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import cls from './News.module.scss';

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.News, {}, [className])}>
            <p className={cls.info}>{t('Новости')}</p>
            <Counter />
        </div>
    );
};

export default News;
