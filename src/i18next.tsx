import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "./locales/en/global.json";
import translation_es from "./locales/es/global.json";

import ocrimage_en from "./locales/en/ocr_image.json";
import ocrimage_es from "./locales/es/ocr_image.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    global: translation_en,
    ocrimage: ocrimage_en,
  },
  es: {
    global: translation_es,
    ocrimage: ocrimage_es,
  }
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18next;