import { Link } from "react-router-dom";
import Boxx from "../images/boxx.png";
import Logonobg from "../images/logonobg.png";
import SmallLine from "../components/SmallLine";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Props from "../images/props.png";

export default function Authenticate() {
  return (
    <>
      <div className="w-[390px] h-[844px static] z-0">
        <div className="w-[full]] min-h-[844px] bg-gradient-to-b from-red-300 via-orange-200 to-red-500 ">
          {/* <div className="h-70 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply">
            <img src={Bgprofile1} alt="" />
          </div> */}
          <div className="shrink-0 w-[200px] h-[auto] absolute mt-80 ml-24 ">
            <img
              src={Logonobg}
              alt=""
              className="w-full h-full object-cover rounded-full "
            />
          </div>
          <div className="-ml-1">
            <Link to="/user-login" className="shrink-0">
              <button className="absolute bg-red-400 text-white border-2 border-gray-200 font-bold px-24 py-1 rounded-lg hover:bg-gray-200 duration-200 top-80 mt-36 ml-20">
                Log In
              </button>
            </Link>
          </div>
          <div className="items-center ml-1">
            <Link to="/user-register" className="shrink-0">
              <button className="absolute bg-red-500 text-white border-2 font-bold px-24 py-1 rounded-lg hover:bg-red-300 duration-200 ml-16 top-96 mt-36 ">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute w-[390px] h-[50px] top-0 px-4 flex items-center gap-4 bg-red-700">
          <LocalMallIcon sx={{ color: "white" }} />

          <Link to="/shop-register">
            <div className="text-white text-sm">Go to shop</div>
          </Link>
        </div>

        <SmallLine />

        <div className="w-[auto] h-[220px] absolute opacity-50 flex justify-center mt-20 top-0 -ml-18 z-40">
          <img className="mr-20 -mt-1" src={Props} alt="" />
        </div>
        <div className="w-[auto] h-[220px] absolute opacity-50 flex justify-center -mt-60 buttom-0 ml-32">
          {/* <img className="" src={} alt="" /> */}
        </div>
      </div>
    </>
  );
}
