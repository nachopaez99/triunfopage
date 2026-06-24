import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import Clientes from "../pages/Clientes";
import FallbackPage from "../pages/FallbackPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
      path: "clientes",
      element: <Clientes />,
      },
      {
        path: "personas",
        element: <FallbackPage />,
      },
      {
        path: "personas/:product",
        element: <FallbackPage />,
      },
      {
        path: "empresas",
        element: <FallbackPage />,
      },
      {
        path: "siniestros",
        element: <FallbackPage />,
      },
      {
        path: "nosotros",
        element: <FallbackPage />,
      },
    ],
  },
]);