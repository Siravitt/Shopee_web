import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import * as authService from "../apis/auth-user-api";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: getAccessToken() ? true : null,
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    googleLogin: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// const {} = authSlice.actions;

export const thunkFetchUser = (data) => async (dispatch) => {
  try {
    const res = await authService.getMe();
    console.log(res.data, "thunkFetchUser");
    dispatch(login(res.data.user));
  } catch (err) {
    // removeAccessToken();
    console.log(err.response?.data);
  }
};

export const thunkLogin = (data) => async (dispatch) => {
  try {
    //   dispatch(loading(true));
    const res = await authService.userLogin(data);
    //   toastDisplaySuccess('login');
    console.log(res.data.accessToken, "accss");
    setAccessToken(res.data.accessToken);
    console.log("decode------", res.data.accessToken);
    dispatch(login(jwtDecode(res.data.accessToken)));
    console.log(jwtDecode(res.data.accessToken));
    // const user = await authService.getMe();
  } catch (error) {
    // toastDisplayFailed(error?.response?.data?.message);
  } finally {
    // dispatch(loading(false));
  }
};

export const thunkGoogleLogin = (token) => async (dispatch) => {
  try {
    const res = await authService.googleLogin(token);
    console.log(res.data.accessToken, "accss");
    setAccessToken(res.data.accessToken);
    dispatch(googleLogin(jwtDecode(res.data.accessToken)));
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;

export const { login, googleLogin } = authSlice.actions;
