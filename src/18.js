import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import translations
import enTranslation from './locales/en/en.json';
import ukTranslation from './locales/ua/ua.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  uk: {
    translation: ukTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
