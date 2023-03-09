import axios from "../configs/axios";

export const getChatShop = () => axios.get("/shop/chat/get-all-chat");
export const getMessageShop = (userId) =>
  axios.get("/shop/chat/get-message/" + userId);
