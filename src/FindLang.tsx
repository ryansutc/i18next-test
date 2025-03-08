import "./App.css";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import i18nextOptions from "./utils/i18nextOptions";

function FindLang() {
  const languageDetector = new LanguageDetector();
  languageDetector.init(i18nextOptions);

  i18next.use(LanguageDetector);

  // But for i18next, they have the browser-languageDetector that goes further,
  // it checks: cookies, session, localStorage, navigator, url querystring, html tags,
  // and then the url path itself

  const capitalizeFirstChar = (str: string) => {
    if (!str) return str; // Handle empty string case
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div id="root">
      <div className="App-header">
        <h2>Detect Your Language</h2>
      </div>
      <div className="App-intro">
        {i18nextOptions.order.map((option: string) => {
          const lookupProp = `lookup` + capitalizeFirstChar(option);
          return (
            <li key={option}>
              <b>{`${option}`}</b>
              {!["navigator", "htmlTag", "path", "subdomain"].includes(
                option
              ) && <span>{` ${i18nextOptions[`${lookupProp}`]}`}</span>}
              {" found: " +
                languageDetector.detectors[option].lookup(
                  languageDetector.options
                )}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default FindLang;
