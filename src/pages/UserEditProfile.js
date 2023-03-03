import BigLine from "../components/BigLine";
import SmallLine from "../components/SmallLine";
import profile2 from "../images/profile2.png";
import Red from "../images/Red.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserEditProfile() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border  ">
        {/* <div className="w-[390px] min-h-[188px]grid justify-items-center"> */}
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto ">
          <div className="h-20 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply">
            <img src={Red} alt="" />
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
        <div className=" mt-24">
          <div className="flex space-x-12 ">
            <div className="ml-10 mt-5 font-bold">Username</div>
            <div className=" mt-5 text-red-400 ">
              {toggleEdit ? (
                <>
                  <input
                    className="border rounded "
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      setToggleEdit(false);
                    }}
                  >
                    OK
                  </button>
                </>
              ) : (
                <button
                  className="ml-30"
                  onClick={(e) => {
                    setToggleEdit(true);
                  }}
                >
                  Set Now
                </button>
              )}
            </div>
          </div>
          {/* --------------------- */}
          <div className=" mt-5">
            <SmallLine />
          </div>
          {/* --------------------- */}
        </div>
        <div className=" ">
          <div className="flex space-x-16 ">
            <div className="ml-10 mt-5 font-bold">Phone</div>
            <div className=" mt-5 text-red-400 ">
              {toggleEdit ? (
                <>
                  <input
                    className="border rounded"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      setToggleEdit(false);
                    }}
                  >
                    OK
                  </button>
                </>
              ) : (
                <button
                  className="ml-30"
                  onClick={(e) => {
                    setToggleEdit(true);
                  }}
                >
                  Set Now
                </button>
              )}
            </div>
          </div>
          {/* --------------------- */}
          <div className=" mt-5">
            <BigLine />
          </div>
          {/* --------------------- */}
        </div>
      </div>
    </>
  );
}
