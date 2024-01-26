import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  SWITCH = 'theme-switcher',
  ClASSIC = 'classic',
  TRANSPARENT = 'transparent',
  WARNING = 'warning'
}
export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?:SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, size, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
