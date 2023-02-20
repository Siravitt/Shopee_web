import home from "../images/home.png";
import chat from "../images/chat.png";
import warn from "../images/warn.png";
import profile from "../images/profile.png";

export default function Footer() {
  return (
    <>
      <div className="w-[390px] h-[70px] px-8 bg-orange-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <img src={home} alt="" />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <img src={chat} alt="" />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <img src={warn} alt="" />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
}
