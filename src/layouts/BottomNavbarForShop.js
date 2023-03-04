import home from "../images/home.png";
import chat from "../images/chat.png";
import warn from "../images/warn.png";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";

export default function BottomNavbarForShop() {
  return (
    <>
      <div className="w-[390px] h-[70px] px-8 bg-blue-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/shop-home">
            <img src={home} alt="" />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/ChatPageForShop">
            <img src={chat} alt="" />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/PendingForShop">
            <img src={warn} alt="" />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/MyShopPage">
            <img src={profile} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
