import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import ProductReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProduct: ProductReducer,
  },
});
