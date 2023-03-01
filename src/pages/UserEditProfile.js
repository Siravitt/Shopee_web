import BigLine from "../components/BigLine";
import SmallLine from "../components/SmallLine";
import profile2 from "../images/profile2.png";
import Bgprofile1 from "../images/bgprofile1.jpg";
import { Link } from "react-router-dom";

export default function UserEditProfile() {
  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border  ">
        {/* <div className="w-[390px] min-h-[188px]grid justify-items-center"> */}
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
          </div>
        </div>

        <div className="flex space-x-48 mt-10">
          <div className="ml-10 mt-5 font-bold">Name</div>
          <div className=" mt-5 text-red-400">
            {/* ................. */}

            {/* .............. */}
          </div>
        </div>
        <div className=" mt-5">
          <SmallLine />
        </div>
        <div className="flex space-x-48">
          <div className="mr-5 ml-10 mt-5 font-bold">Bio</div>
          <div className=" mt-5 text-red-400">
            <button>Set Now</button>
          </div>
        </div>
        <div className=" mt-5">
          <BigLine />
        </div>
        <div className="flex space-x-44">
          <div className="ml-10 mt-5 font-bold">Gender </div>
          <div className=" mt-5 pl-1 text-red-400">
            <button>Set Now</button>
          </div>
        </div>
        <div className=" mt-5">
          <SmallLine />
        </div>
        <div className="flex space-x-28">
          <div className="mr-5 ml-10 mt-5 font-bold">Date of Birth</div>
          <div className=" mt-5 pl-2 text-red-400">
            <button>Set Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
