import axios from "../configs/axios";

export const userRegister = (input) => axios.post("/user/user-register", input);
export const userLogin = (input) => axios.post("/user/user-login", input)