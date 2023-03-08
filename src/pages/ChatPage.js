import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import { thunkGetAllChat } from "../reduxStore/ChatSlice";

export default function ChatPage() {
  const chat = useSelector((state) => state.chat.chatList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetAllChat());
  }, []);
  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border static">
        <div className="absolute mt-4 ml-4">
          <Link to="/">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <div className="w-full h-[60px] bg-gradient-to-r from-orange-400 via-Amber-200  to-red-400 flex items-center justify-center">
          <div className="text-[25px] text-white font-bold">Chat</div>
        </div>
        {chat.map((el) => (
          <ChatList
            key={el.id}
            shopName={el.name}
            shopId={el.id}
            image={el.profileImage}
          />
        ))}
      </div>
    </>
  );
}
