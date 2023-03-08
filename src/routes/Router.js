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

import NormalLayout from "../layouts/NormalLayout";

import Category from "../pages/Category";
import MyShopPage from "../pages/MyShopPage";
import PendingForShop from "../pages/PendingForShop";
import ShippingForShop from "../pages/ShippingForShop";
import OrderSuccessForShop from "../pages/OrderSuccessForShop";

import Mycart from "../pages/Mycart";
import Authenticate from "../pages/Authenticate";
import UserEditProfile from "../pages/UserEditProfile";
import ShopProductUser from "../pages/ShopProductUser";
import AddProduct from "../pages/addProduct";
import OrderDetail from "../pages/OrderDetail";
import OrderDetailForShop from "../pages/OrderDetailForShop";
import AddressPage from "../pages/AddressPage";
import ProductHomePage from "../pages/ProductHomePage";
import ProductElectronicPage from "../pages/ProductElectronicPage";
import ProductFashionPage from "../pages/ProductFashionPage";
import ProductLifestylePage from "../pages/ProductLifestylePage";
import ProductKidPage from "../pages/ProductKidPage";
import ShopEditProfile from "../pages/ShopEditProfile";
import EditProduct from "../pages/EditProduct";
import NewAddressPage from "../pages/NewAddress";
import Payment from "../pages/Payment";
import EditAddress from "../pages/EditAddress";
import NewAddressCheckout from "../pages/NewAddressCheckout";
import ShopChatBox from "../pages/ShopChatBox";

const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/chatBox/:shopId",
        element: <ChatBox />,
      },
      {
        path: "/",
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
      {
        path: "/ProductHome",
        element: <ProductHomePage />,
      },
      {
        path: "/ProductElectronic",
        element: <ProductElectronicPage />,
      },
      {
        path: "/ProductFashion",
        element: <ProductFashionPage />,
      },
      {
        path: "/ProductLifestyle",
        element: <ProductLifestylePage />,
      },
      {
        path: "/ProductKid",
        element: <ProductKidPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
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
      { path: "/shop-profile", element: <MyShopPage /> },
      { path: "/PendingForShop", element: <PendingForShop /> },
      { path: "/OrderSuccessForShop", element: <OrderSuccessForShop /> },
      { path: "/ShippingForShop", element: <ShippingForShop /> },
      { path: "/ChatPageForShop", element: <ChatPageForShop /> },
      { path: "/addProduct", element: <AddProduct /> },
      { path: "/editProduct", element: <EditProduct /> },
      { path: "/shop-chat", element: <ShopChatBox /> },
    ],
  },
  {
    element: <NormalLayout />,
    children: [
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/user-login",
        element: <UserLoginPage />,
      },
      {
        path: "/user-register",
        element: <UserRegisterPage />,
      },
    ],
  },
  {
    path: "/my-cart",
    element: <Mycart />,
  },
  // อันนี้คืออะไรนะครับ น่าจะซ้ำกับ shop-home
  {
    path: "/shopProducts/:shopId",
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
  {
    path: "/address",
    element: <AddressPage />,
  },
  {
    path: "/shopEditProfile",
    element: <ShopEditProfile />,
  },
  {
    path: "/newAddress",
    element: <NewAddressPage />,
  },
  {
    path: "/NewAddressCheckout",
    element: <NewAddressCheckout />,
  },
  {
    path: "/EditAddress/:addressId",
    element: <EditAddress />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
