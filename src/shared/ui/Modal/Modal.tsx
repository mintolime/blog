import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen:boolean;
  onClose:()=> void;
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods : Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    // функция отменяющяя всплытие
    const onContentCLick = (evt:React.MouseEvent) => {
        evt.stopPropagation();
    };

    // функция закрытия окна
    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };
    // функция закрытия окна по кнопке Esc
    const onKeyClose = useCallback((evt:KeyboardEvent) => {
        if (evt.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyClose);
        }
        return () => {
            window.removeEventListener('keydown', onKeyClose);
        };
    }, [onKeyClose]);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentCLick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
