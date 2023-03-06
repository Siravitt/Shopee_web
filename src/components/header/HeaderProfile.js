import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import profile2 from "../../images/profile2.png";
import Bgprofile1 from "../../images/bgprofile1.jpg";
import { removeAccessToken } from "../../utils/local-storage";
import { clearCart } from "../../reduxStore/CartSlice";
import { logout } from "../../reduxStore/AuthSlice";

export default function HeaderProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(clearCart())
    dispatch(logout())
    removeAccessToken();
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto ">
        <div className="h-70 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply">
          <img src={Bgprofile1} alt="" />
        </div>
        <div className="w-56 md:w-64  -mt-16  rounded-lg overflow-hidden">
          <div className="flex justify-center items-center">
            <img src={profile2} alt="" />
          </div>
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
            Username
          </div>
          <div className="flex items-center justify-center">
            <Link to="/UserEditProfile">
              <button className=" bg-red-400 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                Edit profile
              </button>
            </Link>
          </div>

          <div
            className="h-[24px] w-[82px] mt-4 text-orange-400 bg-red-200 flex justify-center items-center  text-[12px] my-1"
            onClick={logOut}
          >
            <button>log out</button>
          </div>
        </div>
      </div>
    </>
  );
}
