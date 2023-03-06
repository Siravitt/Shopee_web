import axios from "../configs/axios";

export const shopRegister = (input) => axios.post("/shop/shop-register", input);
export const shopLogin = (input) => axios.post("/shop/shop-login", input);
