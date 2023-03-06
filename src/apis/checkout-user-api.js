import axios from "../configs/axios";

export const createCharge = (input) =>
  axios.post("/user/checkout/create-charge", input);
