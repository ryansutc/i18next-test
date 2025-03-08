import "./App.css";

import { Suspense } from "react";

import FindLang from "./FindLang";
import MainPage from "./MainPage";

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <FindLang />
      <MainPage />
    </Suspense>
  );
}

export default App;
