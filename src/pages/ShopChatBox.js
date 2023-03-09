import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMessageShop } from "../apis/chat-shop-api";
import UserMessage from "../components/chat/UserMessage";
import ShopMessage from "../components/chat/ShopMessage";
import socket from "../configs/socket";

export default function ShopChatBox() {
  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();
  const authShop = useSelector((state) => state.auth.authShop);
  console.log(authShop);

  useEffect(() => {
    const fetchChat = async () => {
      const res = await getMessageShop(userId);
      setAllMessage(res.data.chats);
    };
    fetchChat();
  }, []);

  useEffect(() => {
    socket.on("receive_message", ({ message }) => {
      const newMessage = {
        id: allMessage.length + 1,
        message: message,
        sender: "user",
      };
      const newAllMessage = structuredClone(allMessage);
      newAllMessage.push(newMessage);
      setAllMessage(newAllMessage);
    });
  }, [allMessage]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newMessage = {
      id: allMessage.length + 1,
      message: message,
      sender: "shop",
    };
    const newAllMessage = structuredClone(allMessage);
    newAllMessage.push(newMessage);
    setAllMessage(newAllMessage);
    setMessage("");
    socket.emit("send_message", {
      to: userId,
      from: authShop.id,
      message: message,
    });
  };

  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border static">
      <div className="absolute mt-4 ml-4">
        <Link to="/ChatPageForShop">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
      </div>
      <div className="w-full h-[60px] px-4 bg-blue-400 flex flex-col items-center justify-center">
        <div className="text-[25px] text-white font-bold">Shop</div>
      </div>
      <div className="w-full pb-[100px]">
        {allMessage.map((el) =>
          el.sender === "shop" ? (
            <UserMessage key={el.id} msg={el.message} />
          ) : (
            <ShopMessage key={el.id} msg={el.message} />
          )
        )}
      </div>
      <div className="flex pl-[20px] pb-[5px] fixed bottom-[50px] bg-white">
        <form className="gap-4" onSubmit={handleSubmitForm}>
          <div className="flex flex-row gap-2">
            <input
              placeholder="Type your message"
              className="w-[300px] border py-2 px-4 bg-blue-200 mx-auto rounded-3xl text-black mb-4"
              onChange={handleOnChange}
              value={message}
            />
            <button className="px-4 mb-4">
              <SendIcon sx={{ color: "black", fontSize: 25 }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
