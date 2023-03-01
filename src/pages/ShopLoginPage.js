import { Link } from "react-router-dom";

import ShopLoginForm from "../components/shop/ShopLoginForm";
import Logo from "../images/logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ShopLoginPage() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-red-400 flex items-center relative">
        <button className="absolute top-4 left-2">
          <Link to="/Authenticate">
            <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
          </Link>
        </button>
        <div className="text-[25px] text-white pl-[100px] font-bold">
          Login for Shop
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="w-full px-14">
        <ShopLoginForm />
      </div>
      <div className="flex justify-center py-4">
        <Link to="/shop-register">
          <button className="w-[200px]  border-2 bg-orange-700 py-1 rounded-xl text-white font-bold hover:bg-orange-600">
            Register?
          </button>
        </Link>
      </div>
      <div className="text-[14px] text-red-600 text-center hover:text-red-900">
        <Link to="/shop-register">
          <button className="underline">
            Don't have an account? Register here!
          </button>
        </Link>
      </div>
    </div>
  );
}
