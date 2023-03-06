import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Link } from "react-router-dom";
import ChatListContainer from "../components/chat/ChatListContainer";
import ChatSearchForm from "../components/chat/ChatSearchForm";
import SmallLine from "../components/SmallLine";

export default function ChatPage() {
  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border static">
        <div className="absolute mt-4 ml-4">
          <Link to="/">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <div className="w-full h-[70px] bg-red-400 flex items-center justify-center">
          <div className="text-[25px] text-white font-bold">Chat</div>
        </div>

        <ChatListContainer />
      </div>
    </>
  );
}
