import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import ProductReducer from "./ProductSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProduct: ProductReducer,
    cart: cartReducer,
  },
});
