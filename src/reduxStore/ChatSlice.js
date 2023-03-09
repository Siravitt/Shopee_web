import { createSlice } from "@reduxjs/toolkit";
import { getAllChat } from "../apis/chat-user-api";
import { getChatShop } from "../apis/chat-shop-api";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
    chatListShop: [],
  },
  reducers: {
    getChatList: (state, action) => {
      state.chatList = action.payload;
    },
    getChatListShop: (state, action) => {
      state.chatListShop = action.payload;
    },
  },
});

export const thunkGetAllChat = () => async (dispatch) => {
  try {
    const res = await getAllChat();
    dispatch(getChatList(res.data.allChatShop));
  } catch (err) {
    console.log(err);
  }
};

export const thunkGetAllChatShop = () => async (dispatch) => {
  try {
    const res = await getChatShop();
    dispatch(getChatListShop(res.data.allChatUser));
  } catch (err) {
    console.log(err);
  }
};

export default chatSlice.reducer;
export const { getChatList, getChatListShop } = chatSlice.actions;
