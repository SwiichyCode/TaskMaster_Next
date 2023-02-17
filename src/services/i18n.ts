import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { translationFr } from "public/locales/fr/translation";
import { translationEn } from "public/locales/en/translation";

const resources = {
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
