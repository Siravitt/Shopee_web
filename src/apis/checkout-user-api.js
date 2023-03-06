import axios from "../configs/axios";

export const createCharge = (input) =>
  axios.post("/user/checkout/create-charge", input);

export const createOrder = (input) => axios.post("/user/order/create-order", input)
