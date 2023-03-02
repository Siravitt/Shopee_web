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
<<<<<<< HEAD
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproduct();
    // console.log(res.data, "thunkFproductServiceetchUser");
=======
    const res = await productService.getAllProduct();
>>>>>>> test5
    dispatch(setProduct(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchAllProductByCatId = categoryId => async dispatch => {
  try {
<<<<<<< HEAD
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproductByCatId(categoryId);
    // console.log(res.data, "thunkFetchAllProductByCatId");
    dispatch(setProductBycat(res?.data?.products));
=======
    const res = await productService.getAllProductByCatId(categoryId);
    dispatch(setProductByCat(res.data.products));
>>>>>>> test5
  } catch (err) {
    console.log(err);
  }
};

export const thunkFetchGetProduct = productId => async dispatch => {
  try {

    const res = await productService.getProduct(productId);
    dispatch(setProductId(res.data.product));
  } catch (err) {
<<<<<<< HEAD
    // removeAccessToken();
    console.log("product-error");
  }
};

//==========================ProductByShopId======================
export const thunkFetchAllProductByShopId = shopId => async dispatch => {
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
=======
    console.log(err);
>>>>>>> test5
  }
};

export default productSlice.reducer;

<<<<<<< HEAD
const { setProduct, setProductBycat, setProductId, setProductByshop } =
  productSlice.actions;
export { setProduct, setProductBycat, setProductId, setProductByshop };
//========================== end ProductByShopId======================
=======
const { setProduct, setProductByCat, setProductId } = productSlice.actions;
export { setProduct, setProductByCat, setProductId };
>>>>>>> test5
