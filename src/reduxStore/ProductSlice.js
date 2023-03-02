import { createSlice } from "@reduxjs/toolkit";

import * as productService from "../apis/product-api";

const productSlice = createSlice({
  name: "product",
  initialState: { cardList: [], productFilter: [] },
  reducers: {
    setProduct: (state, action) => {
      state.cardList = action.payload;
    },
    setProductBycat: (state, action) => {
      state.productFilter = action.payload;
    },
  },
});

export const thunkFetchAllProduct = () => async dispatch => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproduct();
    console.log(res.data, "thunkFproductServiceetchUser");
    dispatch(setProduct(res.data.products));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
    console.log(err.response?.data);
  }
};

export const thunkFetchAllProductByCatId = categoryId => async dispatch => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await productService.getAllproductByCatId(categoryId);
    console.log(res.data, "thunkFetchAllProductByCatId");
    dispatch(setProductBycat(res.data.products));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
    console.log(err.response?.data);
  }
};

export default productSlice.reducer;

const { setProduct, setProductBycat } = productSlice.actions;
export { setProduct, setProductBycat };