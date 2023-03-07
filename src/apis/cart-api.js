import axios from "../configs/axios";

export const getCart = () => axios.get("/user/cart/get-cart");
export const addCart = (input) => axios.post("/user/cart/add-cart", input);
export const updateCart = (input) =>
  axios.patch("/user/cart/update-cart", input);
