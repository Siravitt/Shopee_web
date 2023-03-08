import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";

export default function ShopChatBox() {
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
      <div className="w-full pb-[100px]"></div>
      <div className="flex pl-[20px] pb-[5px] fixed bottom-[50px] bg-white">
        <form className="gap-4">
          <div className="flex flex-row gap-2">
            <input
              placeholder="Type your message"
              className="w-[300px] border py-2 px-4 bg-blue-200 mx-auto rounded-3xl text-black mb-4"
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
