import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileLayout from "../layouts/MobileLayout";
import ShopLoginPage from "../pages/ShopLoginPage";
import ShopRegisterPage from "../pages/ShopRegisterPage";
import UserLoginPage from "../pages/UserLoginPage";
import UserRegisterPage from "../pages/UserRegisterPage";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyOrderPage from "../pages/MyOrderPage";
import PendingPage from "../pages/PendingPage";
import ShippingPage from "../pages/ShippingPage";
import OrderPage from "../pages/OrderPage";
import ChatBox from "../pages/ChatBox";

import ShopHome from "../pages/shopHomePage";
import MobileLayoutForShop from "../layouts/MobileLayoutForShop";
// import RegisterShop from "../Shop/register Shop";

import Category from "../pages/Category";

import Mycart from "../pages/Mycart";

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
        path: "/chatBox",
        element: <ChatBox />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/MyOrderPage",
        element: <MyOrderPage />,
      },
      {
        path: "/category-products",
        element: <Category />,
      },
      {
        path: "/PendingPage",
        element: <PendingPage />,
      },
      {
        path: "/ShippingPage",
        element: <ShippingPage />,
      },
      {
        path: "/OrderPage",
        element: <OrderPage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
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
    element: <MobileLayoutForShop />,
    children: [{ path: "/shop-home", element: <ShopHome /> }],
  },
  {
    path: "/my-cart",
    element: <Mycart />
  }
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
