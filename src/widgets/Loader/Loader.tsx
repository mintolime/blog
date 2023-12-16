import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <span className={classNames('loader', {}, [className])} />
);
