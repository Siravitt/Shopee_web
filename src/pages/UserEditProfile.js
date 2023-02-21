import BigLine from "../components/BigLine";
import SmallLine from "../components/SmallLine";
import profile2 from "../images/profile2.png";

export default function UserEditProfile() {
  return (
    <>
      <div className="w-[390px] min-h-[188px] bg-orange-400 grid justify-items-center">
        <div className="w-[89px] min-h-[105px] mx-[28px] mt-5 ">
          <img src={profile2} alt="" />
        </div>
        <div className="h-[24px] w-[110px] text-orange-400 bg-gray-200 grid justify-items-center text-[12px] font-bold">
          <button>Change Picture </button>
        </div>
      </div>

      <div className="flex space-x-48">
        <div className="ml-10 mt-5 font-bold">Name</div>
        <div className=" mt-5 text-orange-400">
          <button>Set Now</button>
        </div>
      </div>
      <div className=" mt-5">
        <SmallLine />
      </div>
      <div className="flex space-x-48">
        <div className="mr-5 ml-10 mt-5 font-bold">Bio</div>
        <div className=" mt-5 text-orange-400">
          <button>Set Now</button>
        </div>
      </div>
      <div className=" mt-5">
        <BigLine />
      </div>
      <div className="flex space-x-44">
        <div className="ml-10 mt-5 font-bold">Gender </div>
        <div className=" mt-5 pl-1 text-orange-400">
          <button>Set Now</button>
        </div>
      </div>
      <div className=" mt-5">
        <SmallLine />
      </div>
      <div className="flex space-x-28">
        <div className="mr-5 ml-10 mt-5 font-bold">Date of Birth</div>
        <div className=" mt-5 pl-2 text-orange-400">
          <button>Set Now</button>
        </div>
      </div>
    </>
  );
}
