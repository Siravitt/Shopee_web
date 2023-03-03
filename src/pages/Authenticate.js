import { Link } from "react-router-dom";

import profile2 from "../images/profile2.png";
import logowithword from "../images/logowithword.png";
import SmallLine from "../components/SmallLine";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Bgprofile1 from "../images/bgprofile1.jpg";
// import Shop from "../images/shop.png";

export default function Authenticate() {
  return (
    <>
      <div className="w-full min-h-[844px] bg-white   ">
        <div className="w-[390px] min-h-[10px] bg-red-300 mx-auto"></div>
        <div className="w-[390px] min-h-[844px] bg-white mx-auto border">
          <div className="w-[390px] h-[180px] flex gap-4 items-center border bg-red-100">
            {/* <div className="h-70 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply">
            <img src={Bgprofile1} alt="" />
          </div> */}
            <div className="shrink-0 w-[75px] h-[75px] rounded-full bg-white flex items-center mr-10 mt-5 ml-8 ">
              <img
                src={profile2}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <Link to="/user-login" className="shrink-0">
              <button className="bg-red-400 text-white border-2 border-gray-200 font-bold px-4 py-1 rounded-lg hover:bg-gray-200 duration-200 mt-5">
                Log In
              </button>
            </Link>
            <Link to="/user-register" className="shrink-0">
              <button className="bg-red-500 text-white border-2 font-bold px-4 py-1 rounded-lg hover:bg-red-300 duration-200 mt-5">
                Register
              </button>
            </Link>
          </div>

          <div className="w-full h-[50px] px-4 flex items-center gap-4 bg-red-300">
            <LocalMallIcon sx={{ color: "white" }} />

            <Link to="/shop-register">
              <div className="text-white text-sm">Go to shop</div>
            </Link>
          </div>

          <SmallLine />

          <div className="opacity-50 flex justify-center mt-20">
            <img src={logowithword} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
