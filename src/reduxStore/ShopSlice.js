import { createSlice } from "@reduxjs/toolkit";

import * as checkoutServiceShop from "../apis/checkout-shop-api";

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    checkoutShop: [],
    orderShop: [],
  },

  reducers: {
    setcheckoutProductShop: (state, action) => {
      state.checkoutShop = action.payload;
    },
    setOrderShop: (state, action) => {
      state.orderShop = action.payload;
    },
  },
});

export const thunkFetcheckProductShop = (pendingShop) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await checkoutServiceShop.getcheckoutProductShop(pendingShop);
    // console.log(res.data.products, "kram id shop");
    dispatch(setcheckoutProductShop(res.data));
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export const thunkFetcheckOrderShop = (pendingShop) => async (dispatch) => {
  try {
    // console.log("mu dfsadf");
    // alert("555");
    const res = await checkoutServiceShop.getcheckoutOrderShop(pendingShop);
    // console.log(res.data.products, "kram id shop");
    dispatch(setOrderShop(res.data));
  } catch (err) {
    // removeAccessToken();
    console.log(err);
  }
};

export default ShopSlice.reducer;

const { setcheckoutProductShop, setOrderShop } = ShopSlice.actions;
export { setcheckoutProductShop, setOrderShop };
