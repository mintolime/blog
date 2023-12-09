import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './Applink.scss';
import { Link, LinkProps } from 'react-router-dom';

interface ApplinkProps extends LinkProps {
  className?: string;
}
export const Applink: FC <ApplinkProps> = (props) => {
    const {
        className, to, children, ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames('Applink', {}, [className])} {...otherProps}>
            {children}
        </Link>
    );
};
