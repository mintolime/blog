import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
    const { t } = useTranslation('main');
    return <div>{t('Главная страница')}</div>;
}

export default Main;
