import { createSlice } from "@reduxjs/toolkit";

import * as productService from "../apis/product-api";

import * as productServiceShop from "../apis/shop-product-api";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cardList: [],
    productFilter: [],
    product: {},
    productFilterShop: [],
  },

  reducers: {
    setProduct: (state, action) => {
      state.cardList = action.payload;
    },
    setProductByCat: (state, action) => {
      state.productFilter = action.payload;
    },
    setProductId: (state, action) => {
      state.product = action.payload;
    },
    setProductByshop: (state, action) => {
      state.productFilterShop = action.payload;
    },
  },
});

export const thunkFetchAllProduct = () => async dispatch => {
  try {
    const res = await productService.getAllProduct();
    dispatch(setProduct(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchAllProductByCatId = categoryId => async dispatch => {
  try {
    const res = await productService.getAllProductByCatId(categoryId);
    dispatch(setProductByCat(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchGetProduct = productId => async dispatch => {
  try {

    const res = await productService.getProduct(productId);
    dispatch(setProductId(res.data.product));
  } catch (err) {
    console.log(err);
  }
};

export default productSlice.reducer;

const { setProduct, setProductByCat, setProductId } = productSlice.actions;
export { setProduct, setProductByCat, setProductId };
