import { Link } from "react-router-dom";
import shopbg from "../../images/shopbg.png";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import profile2 from "../../images/profile2.png";
import { thunkGetShop } from "../../reduxStore/AuthSlice";


export default function HeaderProfileForShop() {
  const shop = useSelector(state => state.auth.authShop);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(thunkGetShop())
  },[])

  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <div className="h-20 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply ">
          <img src={shopbg} alt="" />
        </div>
        <div className="w-56 md:w-64  -mt-16 overflow-hidden">
          <div className="flex justify-center items-center">
            <img src={shop.profileImage || profile2} alt="" className="w-[100px] h-[100px] rounded-full object-cover"/>
          </div>
          <div className="py-2 text-center font-bold uppercase tracking-wide text-white">
            {shop.name}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              to="/ShopEditProfile"
              className="bg-sky-400 text-xs text-white mt-4 px-2 py-1 font-semibold rounded uppercase hover:bg-blue-300"
            >
              Edit profile
            </Link>

            <Link
              to="/"
              className="bg-sky-400 text-xs text-white py-1 font-semibold rounded uppercase hover:bg-blue-300 px-4 mt-2 mb-8"
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
