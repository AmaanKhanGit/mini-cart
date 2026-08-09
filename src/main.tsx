import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";

// & for automatic theme change

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applySystemTheme = () => {
  document.documentElement.classList.toggle("dark", mediaQuery.matches);
};

applySystemTheme();

mediaQuery.addEventListener("change", applySystemTheme);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
