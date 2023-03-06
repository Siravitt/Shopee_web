import axios from "../configs/axios";

export const userRegister = (input) => axios.post("/user/auth/register", input);
export const userLogin = (input) => axios.post("/user/auth/login", input);
export const getMe = () => axios.get("/user/auth/getMe");
export const googleLogin = (token) =>
  axios.post("/user/auth/google-login", { token });
export const updateUserProfile = (FormData) =>
  axios.patch("/user/auth/edit-profile", FormData);
