import "./App.css";

import { DetectorOptions } from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";

import { languageDetector } from "./i18n/i18n";
import i18nextOptions from "./i18n/i18nextOptions";

type i18nextDetectorKeys = keyof DetectorOptions;
function FindLang() {
  const langDetector = languageDetector;
  const { t, i18n } = useTranslation();

  // For i18next, they have the browser-langDetector that does a bunch of steps to detect your
  // language preference.
  // It checks: cookies, session, localStorage, navigator, url querystring, html tags,
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
        {
          // "order" is not a public interface property
          // I guess the lang inspector doesn't intend for us to inspect
          // it to show us how it got its values
          // @ts-expect-error known private prop
          i18nextOptions.order.map((option: string) => {
            const lookupProp = `lookup` + capitalizeFirstChar(option);
            return (
              <li key={option}>
                <b>{`${option}`}</b>
                {!["navigator", "htmlTag", "path", "subdomain"].includes(
                  option
                ) && (
                  <span>{` ${
                    i18nextOptions[lookupProp as i18nextDetectorKeys]
                  }`}</span>
                )}
                {` ${t("found")} ${
                  langDetector.detectors[option].lookup(langDetector.options) ??
                  t("nothing")
                }`}
              </li>
            );
          })
        }
      </div>
      <div>
        <p>
          {" "}
          {t("langDetected")}
          <b>{` ${i18n.language}`}</b>{" "}
        </p>
      </div>
    </div>
  );
}

export default FindLang;
