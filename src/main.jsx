import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 1. ផ្លាស់ប្តូរត្រង់នេះពី BrowserRouter មកជា HashRouter
import ContextProvider from "./context/AppContext.jsx";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter> {/* 2. ដូរ Tag បើកមកជា HashRouter (មិនបាច់ដាក់ basename ទេ) */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </HashRouter>
);