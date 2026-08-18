import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CartPage from "./pages/CartPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "./components/ui/toast.tsx";

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
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
