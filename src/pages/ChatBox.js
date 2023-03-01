import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChatBox() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-red-400 flex flex-col items-center">
        <button className="absolute top-4 left-2">
          <Link to="/my-cart">
            <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
          </Link>
        </button>
        <div className="text-[25px] text-white font-bold mt-5">Shop Name</div>
      </div>
      <div className="w-full  ">
        <div className="w-full chat chat-start my-2">
          <div className="chat-bubble mt-4 bg-red-300 text-black">
            Can I help you?
          </div>
        </div>

        <div className="w-full chat chat-end my-2">
          <div className="chat-bubble bg-red-100 text-black">
            Help me please, Shop.
          </div>
        </div>
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="flex  pt-[400px] pl-[20px] fixed ">
        <form className="gap-4 ">
          <div className="flex flex-row gap-2 ">
            <input
              placeholder="พิมพ์ข้อความของคุณ"
              className="w-[300px] rounded-xl border px-4  bg-red-200 mx-auto rounded-3xl text-black "
            />
            <button className="border bg-gray-200 rounded-full w-15 hover:bg-red-400">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
