import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import i18nextBackendOptions from "./i18nextBackendOptions";
import i18nextOptions from "./i18nextOptions";

export const languageDetector = (() => {
  // We can detect the language preferences of the browser
  // by simply doing the following:
  //const browserLang = navigator.language;

  // But for i18next, they have the browser-languageDetector that goes further,
  // it checks: cookies, session, localStorage, navigator, url querystring, html tags,
  // and then the url path itself.
  // Lets use that!
  const langDetector = new LanguageDetector();
  langDetector.init(i18nextOptions);
  return langDetector;
})();

export const httpApi = new HttpApi(i18nextBackendOptions);

// Deliberate global variable:
i18n
  //.use(httpApi)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    saveMissing: true,
    // keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      bindI18n: "languageChanged editorSaved",
    },
    resources: {
      en: {
        translation: {
          appDetail:
            "This is a React app showing how to use the i18n approach for multi-language support. It is pretty interesting.",
          howWeTranslate: "This is how we can translate messages",
          found: "found",
          langDetected: "Language Detected:",
          nothing: "nothing",
        },
      },
      es: {
        translation: {
          appDetail:
            "Esta es una aplicación React que muestra cómo usar el enfoque i18n para soporte multilingüe. Es bastante interesante.",
          found: "encontrado",
          howWeTranslate: "Así es como podemos traducir los mensajes",
          langDetected: "Idioma detectado:",
          nothing: "nada",
        },
      },
    },
  });
