import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import UserRegisterForm from "../components/user/UserRegisterForm";
import UserLoginGoogleFrom from "../components/user/UserLoginGoogleFrom";
import Bgbg from "../components/bgbg";
import { Link } from "react-router-dom";

export default function UserRegisterPage() {
  return (
    <>
      <div className="bg-red-200 h-800 static">
        <div className="absolute mt-4 ml-4 z-10">
          <Link to="/Authenticate">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <div className="">
          <Bgbg />

          <div className="rounded-3xl border-t-2  bg-white ml-2 mr-2 py-4">
            <div className=" mt-5 ml-10 text-red-500 text-[22px] font-extrabold flex justify-items-center">
              REGISTER
            </div>
            <div className=" flex justify-center mb-4 mt-5">
              <UserLoginGoogleFrom />
            </div>
            <div className="flex justify-between items-center mx-14">
              <div className="w-[170px] h-[1px] bg-slate-200"></div>
              <div>
                <h1 className="text-gray-400"> OR </h1>
              </div>
              <div className="w-[170px] h-[1px] bg-slate-200"></div>
            </div>
            <div className="w-full px-14">
              <UserRegisterForm />
            </div>
            <div className="text-[14px] text-red-600 text-center  hover:text-red-900">
              <Link to="/user-login">
                <button className="underline">
                  Already have an account? Click here!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { Link } from "react-router-dom";

// import UserLoginGoogleFrom from "../components/user/UserLoginGoogleFrom";

// import UserRegisterForm from "../components/user/UserRegisterForm";
// import Logo from "../images/logo.png";

// export default function RegisterPage() {
//   return (
//     <>
//       <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
//         <div className="text-[25px] text-white font-bold">Register</div>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
//           <img src={Logo} alt="" />
//         </div>
//       </div>
//       <div className=" flex justify-center mb-4 ">
//         <UserLoginGoogleFrom />
//       </div>
//       <div className="flex justify-between items-center mx-14">
//         <div className="w-[170px] h-[1px] bg-slate-200"></div>
//         <div>
//           <h1 className="text-gray-400"> OR </h1>
//         </div>
//         <div className="w-[170px] h-[1px] bg-slate-200"></div>
//       </div>

//       <div className="w-full px-14 mb-[70px]">
//         <Link to="/user-login">
//           <UserRegisterForm />
//         </Link>
//       </div>
//     </>
//   );
// }

//
