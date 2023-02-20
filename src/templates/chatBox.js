import React from "react";

export default function chatBox() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-orange-400 flex flex-col items-center">
        <div className="text-[25px] text-white font-bold">Shop Name</div>
      </div>
      <div className="w-full  ">
        <div className="w-full chat chat-start my-2">
          <div className="chat-bubble mt-4 bg-gray-200 text-black">
            Can I help you?
          </div>
        </div>

        <div className="w-full chat chat-end my-2">
          <div className="chat-bubble bg-orange-200 text-black">
            Help me please, Shop.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <form className="gap-4 ">
          <div className="flex flex-row gap-2 ">
            <input
              placeholder="พิมพ์ข้อความของคุณ"
              className="w-full rounded-xl border px-4 py-1 bg-gray-200 mx-auto rounded-3xl text-black"
            />
            <button>Click</button>
          </div>
        </form>
      </div>
    </div>
  );
}
