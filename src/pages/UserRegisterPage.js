import UserRegisterForm from "../components/user/UserRegisterForm";
import Logo from "../images/logo.png";

export default function RegisterPage() {
  return (
    <>
      <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Register</div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="w-full px-14 mb-[70px]">
        <UserRegisterForm />
      </div>
    </>
  );
}
