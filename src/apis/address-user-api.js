import axios from "../configs/axios";

export const getAllAddress = () => axios.get("/user/address/all-address");
