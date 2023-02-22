import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileLayout from "../layouts/MobileLayout";
import ShopLoginPage from "../pages/ShopLoginPage";
import ShopRegisterPage from "../pages/ShopRegisterPage";
import UserLoginPage from "../pages/UserLoginPage";
import UserRegisterPage from "../pages/UserRegisterPage";
import ChatPage from "../pages/ChatPage";
import ChatPageForShop from "../pages/ChatPageForShop";
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
import MyShopPage from "../pages/MyShopPage";
import PendingForShop from "../pages/PendingForShop";
import ShipingForShop from "../pages/ShipingForShop";
import OrderSuccessForShop from "../pages/OrderSuccessForShop";

import Mycart from "../pages/Mycart";
import Authenticate from "../pages/Authenticate";
import UserEditProfile from "../pages/UserEditProfile";
import ShopProductUser from "../pages/ShopProductUser";
import AddProduct from "../pages/addProduct";
import OrderDetail from "../pages/OrderDetail";
import OrderDetailForShop from "../pages/OrderDetailForShop";

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
      {
        path: "/Authenticate",
        element: <Authenticate />,
      },
      {
        path: "/UserEditProfile",
        element: <UserEditProfile />,
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
    children: [
      { path: "/shop-home", element: <ShopHome /> },
      { path: "/MyShopPage", element: <MyShopPage /> },
      { path: "/PendingForShop", element: <PendingForShop /> },
      { path: "/OrderSuccessForShop", element: <OrderSuccessForShop /> },
      { path: "/ShipingForShop", element: <ShipingForShop /> },
      { path: "/ChatPageForShop", element: <ChatPageForShop /> },
      { path: "/addProduct", element: <AddProduct /> },
    ],
  },
  {
    path: "/my-cart",
    element: <Mycart />,
  },
  {
    path: "/shop-products",
    element: <ShopProductUser />,
  },
  {
    path: "/OrderDetail",
    element: <OrderDetail />,
  },
  {
    path: "/OrderDetailForShop",
    element: <OrderDetailForShop />,
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
