import axios from "../configs/axios";

export const getAllChat = () => axios.get("/user/chat/get-all-chat");
export const getMessage = (shopId) => axios.get("/user/chat/get-message/" + shopId);
