import { createSlice, current } from "@reduxjs/toolkit";
import { addCart, getCart, updateCart } from "../apis/cart-api";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: [],
    selectedItem: {},
  },
  reducers: {
    getAllCart: (state, action) => {
      state.itemInCart = action.payload;
    },
    addToCart: (state, action) => {
      state.itemInCart.push(action.payload);
    },
    addByOne: (state, action) => {
      const idx = state.itemInCart.findIndex(
        (el) => el.productId === action.payload.productId
      );
      state.itemInCart[idx].quantity = +state.itemInCart[idx].quantity + 1;
      if (state.selectedItem[action.payload.shopName]) {
        const idx = state.selectedItem[action.payload.shopName].findIndex(
          (el) => el.productId === action.payload.productId
        );
        state.selectedItem[action.payload.shopName][idx].quantity =
          +state.selectedItem[action.payload.shopName][idx].quantity + 1;
      }
    },
    removeByOne: (state, action) => {
      const idx = state.itemInCart.findIndex(
        (el) => el.productId === action.payload.productId
      );

      if (state.itemInCart[idx].quantity <= 1) {
        state.itemInCart.splice(idx, 1);
      } else {
        state.itemInCart[idx].quantity = +state.itemInCart[idx].quantity - 1;
      }
      if (state.selectedItem[action.payload.shopName]) {
        const index = state.selectedItem[action.payload.shopName]?.findIndex(
          (el) => el.productId === action.payload.productId
        );
        if (state.selectedItem[action.payload.shopName][index].quantity <= 1) {
          state.selectedItem[action.payload.shopName].splice(index, 1);
          if (state.selectedItem[action.payload.shopName].length === 0) {
            delete state.selectedItem[action.payload.shopName];
          }
        } else {
          state.selectedItem[action.payload.shopName][index].quantity =
            +state.selectedItem[action.payload.shopName][index].quantity - 1;
        }
      }
    },
    clearCart: (state, action) => {
      state.itemInCart = [];
    },
    selectAllCart: (state, action) => {
      state.selectedItem = action.payload;
    },
    unSelectAllCart: (state, action) => {
      state.selectedItem = {};
    },
    selectShop: (state, action) => {
      const key = Object.keys(action.payload);
      const value = Object.values(action.payload);
      state.selectedItem[key] = value.flat();
    },
    unSelectShop: (state, action) => {
      delete state.selectedItem[action.payload];
    },
    selectProduct: (state, action) => {
      const key = Object.keys(action.payload);
      const value = Object.values(action.payload);
      if (state.selectedItem[key]) {
        state.selectedItem[key] = [...state.selectedItem[key], value];
      } else {
        state.selectedItem[key] = value;
      }
    },
    unSelectProduct: (state, action) => {
      const newState = state.selectedItem[action.payload.key].filter(
        (el) => el.productId !== action.payload.productId
      );
      if (newState.length === 0) {
        delete state.selectedItem[action.payload.key];
      } else {
        state.selectedItem[action.payload.key] = newState;
      }
    },
    clearSelectCart: (state, action) => {
      state.selectedItem = {};
    },
  },
});

export const thunkGetCart = () => async (dispatch) => {
  try {
    const res = await getCart();
    dispatch(getAllCart(res.data.newCart));
  } catch (err) {
    console.log(err);
  }
};

export const thunkAddToCart = (product) => async (dispatch) => {
  try {
    await addCart(product);
    dispatch(addToCart(product));
  } catch (err) {
    console.log(err);
  }
};

export const thunkUpdateCart = (input) => async (dispatch) => {
  try {
    await updateCart(input);
  } catch (err) {
    console.log(err);
  }
};

export default cartSlice.reducer;

export const {
  getAllCart,
  addToCart,
  addByOne,
  removeByOne,
  clearCart,
  selectAllCart,
  unSelectAllCart,
  selectShop,
  unSelectShop,
  selectProduct,
  unSelectProduct,
  clearSelectCart
} = cartSlice.actions;
