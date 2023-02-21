import { Link } from "react-router-dom";

import profile2 from "../images/profile2.png";
import logowithword from "../images/logowithword.png";
import SmallLine from "../components/SmallLine";
import Shop from "../images/shop.png";

export default function Authenticate() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <div className="w-[390px] min-h-[188px] bg-orange-400  flex  items-center ">
          <div className="w-[89px] min-h-[105px] mx-[28px]">
            <img src={profile2} alt="" />
          </div>

          <div className="">
            <Link to="/user-login">
              <button className="bg-white text-orange-400 border-2 border-white font-bold py-2 px-6 rounded-full">
                {" "}
                Log In
              </button>
            </Link>
            <Link to="/user-register">
              <button className="bg-orange-400 text-white border-2 font-bold py-2 px-4 rounded-full ml-3">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex space-x-4 bg-orange-100 ">
          <div className="ml-5 mt-2">
            <img src={Shop} alt="" />
          </div>
          <Link to="/shop-login">
            <div className="text-orange-400 mt-2 p-3">Go to shop</div>
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
