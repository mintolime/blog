import { useTranslation } from 'react-i18next';

function Main() {
    const { t } = useTranslation();
    return <div>{t('Главная страница')}</div>;
}

export default Main;
