import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Link } from "react-router-dom";
import signupShop from "../images/signupShop.mp4";

import ShopRegisterForm from "../components/shop/ShopRegisterForm";
import Logo from "../images/logo.png";

export default function ShopRegisterPage() {
  return (
    <div className="relative w-[390px] min-h-[845px] mx-auto border static">
      <div className="absolute mt-4 ml-4 z-10">
        <Link to="/MyOrderPage">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
      </div>
      <div className="absolute inset-0 h-[full] w-full ">
        <video
          className="h-[845px] object-cover"
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src={signupShop} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 top-40">
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
