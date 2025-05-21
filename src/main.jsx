import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
