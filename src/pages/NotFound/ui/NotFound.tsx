import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation('main');
    return (
        <div className="not-found">
            <p className="not-found-info">{t('Страница не найдена')}</p>
        </div>
    );
}

export default NotFound;
