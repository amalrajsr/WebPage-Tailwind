import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import ErrorPage from "./components/UI/ErrorPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary fallback={ErrorPage}>
      <App />
    </ErrorBoundary>
);
