import UserRegisterForm from "../components/user/UserRegisterForm";
import Logo from "../images/logo.png";
import gg from "../images/gg.png";

export default function RegisterPage() {
  return (
    <>
      <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Register</div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="w-[260px] ml-16 mb-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow flex  space-x-0 flex ">
       <div className="px-4"><img src={gg} alt="" /></div>
       <div className="flex justify-items-center ">
        <button> Continue with Google</button>
       </div>
       </div>
      

      <div className="w-full px-14 mb-[70px]">
        <UserRegisterForm />
      </div>
    </>
  );
}
