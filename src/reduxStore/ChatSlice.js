import { createSlice } from "@reduxjs/toolkit";
import { getAllChat } from "../apis/chat-user-api";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
  },
  reducers: {
    getChatList: (state, action) => {
      state.chatList = action.payload;
    },
  },
});

export const thunkGetAllChat = () => async (dispatch) => {
  try {
    const res = await getAllChat();
    dispatch(getChatList(res.data.allChatShop))
  } catch (err) {
    console.log(err);
  }
};

export default chatSlice.reducer
export const { getChatList } = chatSlice.actions;
