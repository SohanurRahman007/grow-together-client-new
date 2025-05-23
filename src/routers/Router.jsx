import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Shared/Error/ErrorPage";
import GardenTip from "../pages/GardenTip/GardenTip";
import ExploreGardener from "../pages/ExploreGardener/ExploreGardener";
import BrowseTipsPage from "../pages/BrowseTipsPage/BrowseTipsPage";
import TipDetailsPage from "../pages/TipDetailsPage/TipDetailsPage";
import PrivetRoute from "./PrivetRoute";
import MyTipsPage from "../pages/MyTipsPage/MyTipsPage";
// import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/gardeners/active"),
        Component: Home,
      },
      {
        path: "/shareTip",
        Component: GardenTip,
      },
      {
        path: "/exploreGardener",
        loader: () => fetch("http://localhost:3000/gardeners"),
        Component: ExploreGardener,
      },
      {
        path: "/browseTipsPage",
        Component: BrowseTipsPage,
      },
      {
        path: "/TipDetailsPage/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shareTip/availability/${params.id}`),
        element: (
          <PrivetRoute>
            <TipDetailsPage />
          </PrivetRoute>
        ),
      },
      {
        path: "/myTipsPage",
        element: (
          <PrivetRoute>
            <MyTipsPage></MyTipsPage>
          </PrivetRoute>
        ),
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
