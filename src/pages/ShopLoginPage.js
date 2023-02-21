import { Link } from "react-router-dom";

import ShopLoginForm from "../components/shop/ShopLoginForm";
import Logo from "../images/logo.png";

export default function ShopLoginPage() {
  return (
    <div>
      <div className="w-full h-[70px] px-4 bg-red-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Login for Shop</div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="w-full px-14">
        <Link to="/shop-home">
          <ShopLoginForm />
        </Link>
      </div>
      <div className="flex justify-center py-4">
        <Link to="/shop-register">
          <button className="w-[200px]  border-2 bg-lime-200 py-1 rounded-xl text-gray font-bold hover:text-blue duration-200">
            Register?
          </button>
        </Link>
      </div>
    </div>
  );
}
