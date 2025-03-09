import "./index.css";
// import i18n (needs to be bundled ;))
import "./i18n/i18n";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
