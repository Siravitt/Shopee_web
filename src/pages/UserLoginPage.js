import { Link } from "react-router-dom";

import UserLoginForm from "../components/user/UserLoginForm";
import Logo from "../images/logo.png";

export default function UserLoginPage() {
  return (
    <>
      <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Login</div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="w-full px-14">
        <Link to="/MyOrderPage">
          <UserLoginForm />
        </Link>
      </div>
    </>
  );
}
