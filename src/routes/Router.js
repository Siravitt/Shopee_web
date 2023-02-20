import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "../page/Product";
import Home from "../page/Home";

const router = createBrowserRouter([
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
