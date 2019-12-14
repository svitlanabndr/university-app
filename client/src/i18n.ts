import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './locales';

i18n.use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  load: 'languageOnly',
  debug: true
});

export default i18n;
