import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileLayout from "../layouts/MobileLayout";
import ShopLoginPage from "../pages/ShopLoginPage";
import ShopRegisterPage from "../pages/ShopRegisterPage";
import UserLoginPage from "../pages/UserLoginPage";
import UserRegisterPage from "../pages/UserRegisterPage";
import ChatPage from "../pages/ChatPage";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ShopHome from "../Shop/shop home";
// import RegisterShop from "../Shop/register Shop";

const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      {
        path: "/user-register",
        element: <UserRegisterPage />,
      },
      {
        path: "/user-login",
        element: <UserLoginPage />,
      },

      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
  {
    path: "shop-register",
    element: <ShopRegisterPage />,
  },
  {
    path: "shop-login",
    element: <ShopLoginPage />,
  },
  {
    path: "shop-home",
    element: <ShopHome />,
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
