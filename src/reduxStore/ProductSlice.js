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
    setProductBycat: (state, action) => {
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

export const thunkFetchAllProduct = () => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproduct();
    // console.log(res.data, "thunkFproductServiceetchUser");
    dispatch(setProduct(res.data.products));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
    console.log(err.response?.data);
  }
};

export const thunkFetchAllProductByCatId = (categoryId) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproductByCatId(categoryId);
    // console.log(res.data, "thunkFetchAllProductByCatId");
    dispatch(setProductBycat(res.data.products));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
    console.log(err.response?.data);
  }
};

export const thunkFetchGetProduct = (productId) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getProduct(productId);
    console.log(res.data, "getProduct");
    dispatch(setProductId(res.data.product));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
  }
};

//==========================ProductByShopId======================
export const thunkFetchAllProductByShopId = (shopId) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productServiceShop.getAllproductShopByShopId(shopId);
    // console.log(res.data.products, "kram id shop");
    dispatch(setProductByshop(res.data));
  } catch (err) {
    // removeAccessToken();
    console.log("productShop-error");
    console.log(err.response?.data);
  }
};

export default productSlice.reducer;

const { setProduct, setProductBycat, setProductId, setProductByshop } =
  productSlice.actions;
export { setProduct, setProductBycat, setProductId, setProductByshop };
//========================== end ProductByShopId======================
