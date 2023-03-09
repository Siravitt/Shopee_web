import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ChatListForShop from "../components/chat/ChatListForShop";
import { thunkGetAllChatShop } from "../reduxStore/ChatSlice";

export default function ChatPageForShop() {
  const chat = useSelector((state) => state.chat.chatListShop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetAllChatShop());
  }, []);
  return (
    <>
      <div className="w-full h-[70px] bg-blue-500 flex items-center justify-center">
        <div className="w-full flex flex-row justify-between h-[70px] px-4 items-center">
          <Link to="/shop-home">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>{" "}
        </div>
        <div className="text-[25px] text-white font-bold mr-40">Chat</div>
      </div>
      <div className="w-full bg-white min-h-[600px] ">
        {chat.map((el) => (
          <ChatListForShop
            key={el.id}
            userName={el.userName}
            userId={el.id}
            image={el.profileImage}
          />
        ))}
      </div>
    </>
  );
}
