import React from 'react';
import cls from './News.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  return (
    <div className={classNames(cls.News, {}, [className])}>
      <p className={cls.info}>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
    </div>
  );
};

export default News;
