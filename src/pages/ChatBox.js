import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMessage } from "../apis/chat-user-api";
import UserMessage from "../components/chat/UserMessage";
import ShopMessage from "../components/chat/ShopMessage";
import { getShopInfoPublic } from "../apis/shop-product-api";
import socket from "../configs/socket";

export default function ChatBox() {
  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState("");
  const [shop, setShop] = useState({});
  const { shopId } = useParams();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);

  useEffect(() => {
    const fetchChat = async () => {
      const res = await getMessage(shopId);
      setAllMessage(res.data.chats);
    };
    const fetchShop = async () => {
      const res = await getShopInfoPublic(shopId);
      if (res.data.shop) {
        fetchChat();
        setShop(res.data.shop);
      } else {
        navigate("/chat");
      }
    };
    fetchShop();
  }, []);

  useEffect(() => {
    socket.on("receive_message", ({ message }) => {
      const newMessage = {
        id: allMessage.length + 1,
        message: message,
        sender: "shop",
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
      sender: "user",
    };
    const newAllMessage = structuredClone(allMessage);
    newAllMessage.push(newMessage);
    setAllMessage(newAllMessage);
    setMessage("");
    socket.emit("send_message", {
      to: shopId,
      from: auth.id,
      message: message,
    });
  };

  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border static">
      <div className="absolute mt-4 ml-4">
        <Link to="/chat">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
      </div>
      <div className="w-full h-[60px] px-4 bg-red-400 flex flex-col items-center justify-center">
        <div className="text-[25px] text-white font-bold">{shop.name}</div>
      </div>
      <div className="w-full pb-[100px]">
        {allMessage.map((el) =>
          el.sender === "user" ? (
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
              placeholder="พิมพ์ข้อความของคุณ"
              className="w-[300px] border py-2 px-4 bg-red-200 mx-auto rounded-3xl text-black"
              onChange={handleOnChange}
              value={message}
            />
            <button className="px-4">
              <SendIcon sx={{ color: "black", fontSize: 25 }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
