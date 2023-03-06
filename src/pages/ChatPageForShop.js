import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChatListContainer from "../components/chat/ChatListContainer";
import { Link } from "react-router-dom";

export default function ChatPageForShop() {
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
        <ChatListContainer />
      </div>
    </>
  );
}
