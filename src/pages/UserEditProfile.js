import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profile2 from "../images/profile2.png";
import Red from "../images/Red.png";
import { thunkUpdateUser, updateUserProfile } from "../reduxStore/AuthSlice";

export default function UserEditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateInfo = useSelector((state) => state.auth.auth);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    profileImage: null,
  });
  // console.log("------", input);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("firstName", input.firstName);
    formData.append("lastName", input.lastName);
    formData.append("userName", input.userName);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("profileImage", input.profileImage);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + " - " + pair[1]);
    // }
    dispatch(thunkUpdateUser(formData));
    navigate("/MyOrderPage");
  };
  return (
    <>
      <div className="w-full min-h-[844px] bg-red-300 mx-auto border  ">
        {/* <div className="w-[390px] min-h-[188px]grid justify-items-center"> */}
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto ">
          <div className="h-20 w-full  shadow-md bg-cover bg-center bg-blend-multiply">
            <img src={Red} alt="" />
          </div>
          <div className="w-56 md:w-64  -mt-16  rounded-lg overflow-hidden">
            <div className="flex justify-center items-center">
              <img src={profile2} alt="" />
            </div>
            <div className="py-4 text-center font-bold tracking-wide text-white text-xl">
              EDIT PROFILE
            </div>
          </div>
          {/* Start User Edit Form */}

          <form
            onSubmit={handleSubmit}
            className="gap-4 py-8 px-4 bg-white mx-2 rounded-xl "
          >
            <div className="flex gap-2">
              <div className="relative">
                <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  className=" border border-red-400 bg-white my-2 rounded-md py-3 pl-4 block w-full sm:text-sm"
                />
              </div>

              <div className="relative">
                <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="border border-red-400 bg-white my-2 rounded-md py-3 pl-4 block w-full sm:text-sm "
                  value={input.lastName}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div className="relative">
              <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                Username
              </label>
              <input
                type="text"
                name="userName"
                value={input.userName}
                onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>

            <div className="relative">
              <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>

            <div className="relative">
              <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={input.phone}
                onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>

            <div className="flex justify-center pt-2 ">
              <button className="w-full bg-red-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-red-700 duration-200 cursor-pointe2">
                Submit
              </button>
            </div>
            <div className="text-sm pt-4 flex justify-center underline pb-4">
              <Link to="/MyOrderPage">Go back to User Profile</Link>
            </div>
          </form>

          {/* End User Edit Form */}
        </div>
      </div>
    </>
  );
}
