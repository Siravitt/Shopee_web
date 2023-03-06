import { createSlice } from "@reduxjs/toolkit";

import * as checkoutServiceShop from "../apis/checkout-shop-api";

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    checkoutShop: [],
  },

  reducers: {
    setcheckoutProductShop: (state, action) => {
      state.checkoutShop = action.payload;
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

export default ShopSlice.reducer;

const { setcheckoutProductShop } = ShopSlice.actions;
export { setcheckoutProductShop };
