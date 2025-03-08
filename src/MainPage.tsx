import "./App.css";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";

import DescriptionPane from "./DescriptionPane";
import i18nextOptions from "./utils/i18nextOptions";

function MainPage() {
  const { t, i18n } = useTranslation();

  const changeLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  // We can detect the language preferences of the browser
  // by simply doing the following:
  const browserLang = navigator.language;

  // But for i18next, they have the browser-languageDetector that goes further,
  // it checks: cookies, session, localStorage, navigator, url querystring, html tags,
  // and then the url path itself

  i18next.use(LanguageDetector).init({
    supportedLngs: ["de", "en", "fr"],
    ...i18nextOptions,
  });

  console.log("Your default browser language is: " + browserLang);
  return (
    <div id="root">
      <div className="App-header">
        <DescriptionPane message="This is how we can translate messages" />
      </div>
      <div className="App-intro">
        <div>
          <button type="submit" onClick={() => changeLang("de")}>
            de
          </button>
          <button type="submit" onClick={() => changeLang("en")}>
            en
          </button>
        </div>
        <div className="App-detail">
          <p>{t("appDetail")}</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
