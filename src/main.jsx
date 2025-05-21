import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router.jsx";
import { AuthContext } from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContext>
  </StrictMode>
);
