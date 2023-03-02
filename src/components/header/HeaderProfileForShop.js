import { Link } from "react-router-dom";
import shopbg from "../../images/shopbg.png";
import profile2 from "../../images/profile2.png";

export default function HeaderProfileForShop() {
  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <div className="h-20 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply ">
          <img src={shopbg} alt="" />
        </div>
        <div className="w-56 md:w-64  -mt-16 overflow-hidden">
          <div className="flex justify-center items-center">
            <img src={profile2} alt="" />
          </div>
          <div className="py-2 text-center font-bold uppercase tracking-wide text-white">
            Username
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to="/ShopEditProfile">
              <button className=" bg-sky-400 text-xs text-white mt-4 px-2 py-1 font-semibold rounded uppercase hover:bg-blue-300">
                Edit profile
              </button>
            </Link>

            <Link to="/">
              <button className=" bg-sky-400 text-xs text-white py-1 font-semibold rounded uppercase hover:bg-blue-300 px-4 mt-2 mb-8">
                Log out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
