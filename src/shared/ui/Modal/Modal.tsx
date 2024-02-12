import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen:boolean;
  isClose:boolean;
}
export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, isClose,
    } = props;

    const mods : Record<string, boolean> = {
        [cls.opened]: isOpen,
        
    };
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
