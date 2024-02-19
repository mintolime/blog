import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Applink } from 'shared/ui/AppLink/Applink';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
    const { t } = useTranslation(['translation', 'button']);
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onToogleAuthModal = () => {
        setIsOpenAuthModal((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR} onClick={onToogleAuthModal}>{t('Войти')}</Button>
                <Modal isOpen={isOpenAuthModal} onClose={onToogleAuthModal}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci laudantium nobis, corporis culpa porro quibusdam repellendus
                    obcaecati nihil, harum eos,
                    dolores officiis sint eum deleniti cupiditate quia inventore saepe vitae
                </Modal>
                <Applink to="/">{t('Главная')}</Applink>
                <Applink to="/news">{t('Новости')}</Applink>
            </div>
        </div>
    );
};
