import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
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

export const backend = new Backend(i18nextBackendOptions);

// Deliberate global variable:
i18n
  .use(backend)
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
  });
