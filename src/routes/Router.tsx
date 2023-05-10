import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";

import { Error } from "../pages/Error";
export const Router: React.FC = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <Error></Error>,
    },
  ]);

  return <RouterProvider router={appRoute}></RouterProvider>;
};
