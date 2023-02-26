import { Link } from "react-router-dom";

import profile2 from "../images/profile2.png";
import logowithword from "../images/logowithword.png";
import SmallLine from "../components/SmallLine";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Shop from "../images/shop.png";

export default function Authenticate() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto">
        <div className="w-[390px] min-h-[188px] bg-orange-400 flex items-center">
          <div className="w-full h-full flex gap-4 items-center mx-8">
            <div className="shrink-0 w-[75px] h-[75px] rounded-full bg-white flex items-center mr-10">
              <img
                src={profile2}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <Link to="/user-login" className="shrink-0">
              <button className="bg-white text-orange-400 border-2 border-white font-bold px-4 py-1 rounded-lg hover:bg-gray-200 duration-200">
                Log In
              </button>
            </Link>
            <Link to="/user-register" className="shrink-0">
              <button className="bg-orange-400 text-white border-2 font-bold px-4 py-1 rounded-lg hover:bg-orange-300 duration-200">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[50px] px-4 flex items-center gap-4 bg-orange-100">
          <LocalMallIcon sx={{ color: "orange" }}/>

          <Link to="/shop-login">
            <div className="text-orange-400 text-sm">Go to shop</div>
          </Link>
        </div>

        <SmallLine />

        <div className="opacity-50 flex justify-center mt-20">
          <img src={logowithword} alt="" />
        </div>
      </div>
    </>
  );
}
