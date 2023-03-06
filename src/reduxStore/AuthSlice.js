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
    updateUserProfile: (state, action) => {
      state.auth = action.payload;
      console.log(action.payload);
    },
  },
});

// const {} = authSlice.actions;

export const thunkFetchUser = (data) => async (dispatch) => {
  try {
    const res = await authService.getMe();
    console.log(res.data);
    dispatch(login(res.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};

export const thunkLogin = (data) => async (dispatch) => {
  try {
    const res = await authService.userLogin(data);
    setAccessToken(res.data.accessToken);
    dispatch(login(jwtDecode(res.data.accessToken)));
  } catch (error) {
  } finally {
  }
};

export const thunkGoogleLogin = (token) => async (dispatch) => {
  try {
    const res = await authService.googleLogin(token);
    setAccessToken(res.data.accessToken);
    dispatch(googleLogin(jwtDecode(res.data.accessToken)));
  } catch (error) {
    console.log(error);
  }
};

//??
export const thunkUpdateUser = (FormData) => async (dispatch) => {
  try {
    const res = await authService.updateUserProfile(FormData);
    // dispatch();
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;

export const { login, googleLogin, updateUserProfile } = authSlice.actions;
