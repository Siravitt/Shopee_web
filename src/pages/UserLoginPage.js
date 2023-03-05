import UserLoginForm from "../components/user/UserLoginForm";
import UserLoginGoogleFrom from "../components/user/UserLoginGoogleFrom";
import Bg from "../components/bg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "../utils/local-storage";

export default function UserLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken]);
  return (
    <>
      <div className="bg-red-200 h-[845px]">
        <div className="">
          <Bg />

          <div className="rounded-3xl border-t-2  bg-white ml-2 mr-2  py-4">
            <div className=" mt-5 ml-10 text-red-400 text-[22px] font-extrabold flex justify-items-center">
              LOGIN
            </div>
            <div className=" flex justify-center mb-6 mt-5">
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
              <UserLoginForm />
            </div>
            <div className="text-[14px] text-red-600 text-center hover:text-red-900">
              <Link to="/user-register">
                <button className="underline">
                  Don't have an account? Register here!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
