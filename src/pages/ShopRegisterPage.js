import { Link } from "react-router-dom";
import openShop from "../images/openShop.mp4";

import ShopRegisterForm from "../components/shop/ShopRegisterForm";
import Logo from "../images/logo.png";

export default function ShopRegisterPage() {
  return (
    <div className="relative w-[390px] min-h-[845px] mx-auto border bg-[#fdcacc] ">
      <div className="absolute inset-0 h-full w-full object-cover">
        <video controls autoPlay muted loop id="myVideo">
          <source src={openShop} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 top-80">
        <ShopRegisterForm />
      </div>
    </div>

    // <div>
    //   <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
    //     <div className="w-full h-[70px] px-4 bg-red-400 flex items-center">
    //       <div className="text-[25px] text-white font-bold">
    //         Register for Shop
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center py-10">
    //       <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
    //         <img src={Logo} alt="" />
    //       </div>
    //     </div>
    //     <div className="w-full px-14">
    //       <ShopRegisterForm />
    //     </div>
    //   </div>
    // </div>
  );
}
