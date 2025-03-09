import "./App.css";

import { useTranslation } from "react-i18next";

import DescriptionPane from "./DescriptionPane";

function MainPage() {
  const { t, i18n } = useTranslation();

  const changeLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div id="root">
      <div className="App-header">
        <DescriptionPane message={t("howWeTranslate")} />
      </div>
      <div className="App-intro">
        <div>
          <button
            style={{ border: i18n.language === "es" ? "solid" : "none" }}
            type="submit"
            onClick={() => changeLang("es")}
          >
            es
          </button>
          <button
            style={{ border: i18n.language === "en" ? "solid" : "none" }}
            type="submit"
            onClick={() => changeLang("en")}
          >
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
