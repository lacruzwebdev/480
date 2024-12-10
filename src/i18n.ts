import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import es from "../locales/es"
import en from "../locales/en"
import { DEFAULT_LANGUAGE } from "./constants/languages"

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || DEFAULT_LANGUAGE,
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  fallbackLng: DEFAULT_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
