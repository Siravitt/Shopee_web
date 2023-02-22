import UserLoginForm from "../components/user/UserLoginForm";
import Logo from "../images/logo.png";
import UserLoginGoogleFrom from "../components/user/UserLoginGoogleFrom";

export default function UserLoginPage() {
  return (
    <>
      <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Login</div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center ">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className=" flex justify-center mb-4 ">
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
    </>
  );
}
