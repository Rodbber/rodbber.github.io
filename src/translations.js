import { createI18n } from "vue-i18n";
import pt_BR from "./locales/pt-BR";
import en from "./locales/en";

const messages = {
  en: en,
  "pt-BR": pt_BR,
  "pt-br": pt_BR,
};

const userLanguage = navigator.language || navigator.userLanguage;

const i18n = createI18n({
  legacy: false,
  locale: userLanguage.toLowerCase() || 'en',
  messages,
});

export default i18n;
