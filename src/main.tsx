import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// & for automatic theme change

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applySystemTheme = () => {
  document.documentElement.classList.toggle("dark", mediaQuery.matches);
};

applySystemTheme();

mediaQuery.addEventListener("change", applySystemTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
