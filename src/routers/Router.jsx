import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Shared/Error/ErrorPage";
import GardenTip from "../pages/GardenTip/GardenTip";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/gardeners"),
        Component: Home,
      },
      {
        path: "/shareTip",
        Component: GardenTip,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
