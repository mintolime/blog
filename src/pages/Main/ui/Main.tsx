import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();
  return <main>{t('Главная страница')}</main>;
}

export default Main;
