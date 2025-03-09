import "./App.css";

import { useTranslation } from "react-i18next";

import DescriptionPane from "./DescriptionPane";

function MainPage() {
  const { t, i18n } = useTranslation();

  const changeLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Español" },
  } as const;

  type lngsTypes = keyof typeof lngs;
  return (
    <div id="root">
      <div className="App-header">
        <DescriptionPane message={t("howWeTranslate")} />
      </div>
      <div className="App-intro">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              style={{ border: i18n.language === lng ? "solid" : "none" }}
              type="submit"
              onClick={() => changeLang(lng)}
            >
              {lngs[lng as lngsTypes].nativeName}
            </button>
          ))}
        </div>
        <div className="App-detail">
          <p>{t("appDetail")}</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
