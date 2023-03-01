import { createSlice } from "@reduxjs/toolkit";

import * as productService from "../apis/product-api";

const productSlice = createSlice({
  name: "product",
  initialState: { cardList: [], productFilter: { categoryId: null } },
  reducers: {
    setProduct: (state, action) => {
      state.cardList = action.payload;
    },
    setProductBycat: (state, action) => {
      state.productFilter.categoryId = action.payload;
    },
  },
});

export const thunkFetchAllProduct = catID => async dispatch => {
  try {
    // console.log("mu dfsadf");
    alert("555");
    const res = await productService.getAllproduct(catID);
    console.log(res.data, "thunkFproductServiceetchUser");
    dispatch(setProduct(res.data.products));
  } catch (err) {
    // removeAccessToken();
    console.log("product-error");
    console.log(err.response?.data);
  }
};

export default productSlice.reducer;

const { setProduct } = productSlice.actions;
export { setProduct };
