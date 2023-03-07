import { createSlice } from "@reduxjs/toolkit";

import * as productService from "../apis/product-api";

import * as productServiceShop from "../apis/shop-product-api";

import * as checkoutServiceUser from "../apis/checkout-user-api";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cardList: [],
    productFilter: [],
    product: {},
    productFilterShop: [],
    shopInfo: {},
    loading: false,
    checkoutUser: [],
    orderShopUser: [],
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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
    setShopInfo: (state, action) => {
      state.shopInfo = action.payload;
    },
    setcheckoutProductUser: (state, action) => {
      state.checkoutUser = action.payload;
    },
    setOrderShopUser: (state, action) => {
      state.orderShopUser = action.payload;
    },
  },
});

export const getLoading = () => async (dispatch) => {
  dispatch(setLoading());
};

export const thunkFetchAllProduct = () => async (dispatch) => {
  try {
    const res = await productService.getAllProduct();
    dispatch(setProduct(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchAllProductByCatId = (categoryId) => async (dispatch) => {
  try {
    const res = await productService.getAllProductByCatId(categoryId);
    dispatch(setProductByCat(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchGetProduct = (productId) => async (dispatch) => {
  try {
    const res = await productService.getProduct(productId);
    dispatch(setProductId(res.data.product));
  } catch (err) {
    console.log(err);
  }
};
export const thunkFetchAllProductByShopId = (shopId) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productServiceShop.getAllproductShopByShopId(shopId);
    // console.log(res.data.products, "kram id shop");
    dispatch(setProductByshop(res.data));
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export const thunkSearchProduct = (searchText) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await productService.searchProduct(searchText);
    dispatch(setProduct(res.data));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  } catch (err) {
    console.log(err);
  }
};

export const thunkGetShopInfoPublic = (shopId) => async (dispatch) => {
  try {
    const res = await productServiceShop.getShopInfoPublic(shopId);
    dispatch(setShopInfo(res.data.shop));
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export const thunkFetcheckProductUser = (pending) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await checkoutServiceUser.getcheckoutProductUser(pending);
    // console.log(res.data.products, "kram id shop");
    dispatch(setcheckoutProductUser(res.data));
    // console.log("BBB", res.data);
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export const thunkFetcheckOderShoptUser = (shinpping) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await checkoutServiceUser.getshinppingOrderShop(shinpping);
    // console.log(res.data.products, "kram id shop");
    dispatch(setOrderShopUser(res.data));
    // console.log("AAA", res.data);
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export const thunkUpdateProduct = (FormData) => async (dispatch) => {
  try {
    const res = await productServiceShop.createProduct(FormData);
    // dispatch();
  } catch (error) {
    console.log(error);
  }
};

export default productSlice.reducer;

const {
  setProduct,
  setProductByCat,
  setProductId,
  setProductByshop,
  setShopInfo,
  setLoading,
  setcheckoutProductUser,
  setOrderShopUser,
} = productSlice.actions;
export {
  setProduct,
  setProductByCat,
  setProductId,
  setProductByshop,
  setShopInfo,
  setLoading,
  setcheckoutProductUser,
  setOrderShopUser,
};
