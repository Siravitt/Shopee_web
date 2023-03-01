import { Link } from "react-router-dom";

export default function ChatList() {
  return (
    <>
      <Link to="/chatBox">
        <button className="w-full px-4 flex items-center gap-4 relative">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-200"></div>
          <div className="font-bold">Major</div>
          <div className="text-[10px] text-red-400 absolute top-0 right-[20px]">
            10:05
          </div>
        </button>
      </Link>
      <hr />
    </>
  );
}
