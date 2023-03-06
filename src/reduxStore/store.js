import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import ProductReducer from "./ProductSlice";
import loadingReducer from "./Loading";
import ShopReducer from "./ShopSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProduct: ProductReducer,
    loading: loadingReducer,
    allShop: ShopReducer,
  },
});
