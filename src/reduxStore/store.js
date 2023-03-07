import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import ProductReducer from "./ProductSlice";
import loadingReducer from "./Loading";
import cartReducer from "./CartSlice";
import ShopReducer from "./ShopSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProduct: ProductReducer,
    loading: loadingReducer,
    cart: cartReducer,
    allShop: ShopReducer,
  },
});
