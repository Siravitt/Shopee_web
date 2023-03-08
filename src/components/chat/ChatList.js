import { Link } from "react-router-dom";

export default function ChatList({ shopId, shopName, image }) {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-6 px-4">
        <Link to={`/chatBox/${shopId}`}>
          <button className="w-full px-4 py-6 flex items-center gap-4 relative">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-200">
              <img
                src={image}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="font-bold">{shopName}</div>
            <div className="text-[10px] text-red-400 absolute top-6 right-[20px]">
              10:05
            </div>
          </button>
          <hr />
        </Link>
      </div>
    </>
  );
}
