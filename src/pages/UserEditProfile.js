import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profile2 from "../images/profile2.png";
import Red from "../images/Red.png";
import { thunkUpdateUser, updateUserProfile } from "../reduxStore/AuthSlice";
import { getLoading } from "../reduxStore/Loading";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

export default function UserEditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (input.firstName) {
        formData.append("firstName", input.firstName);
      }
      if (input.lastName) {
        formData.append("lastName", input.lastName);
      }
      if (input.userName) {
        formData.append("userName", input.userName);
      }
      if (input.email) {
        formData.append("email", input.email);
      }
      if (input.phone) {
        formData.append("phone", input.phone);
      }
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }
      dispatch(getLoading());
      dispatch(thunkUpdateUser(formData));
      setInput({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
      });
      setProfileImage(null);
      toast.success("Success");
      navigate("/MyOrderPage");
    } catch (err) {
      toast.error("Cannot update");
      console.log(err.response?.data);
    } finally {
      dispatch(getLoading());
    }
  };
  return (
    <>
      <div className="w-full min-h-[844px] bg-red-300 mx-auto border  ">
        {/* <div className="w-[390px] min-h-[188px]grid justify-items-center"> */}
        {loading ? <Spinner /> : null}
        <div className="absolute mt-4 ml-4">
          <Link to="/MyOrderPage">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center max-w-sm mx-auto ">
          <div className="h-20 w-full  shadow-md bg-cover bg-center bg-blend-multiply">
            <img src={Red} alt="" />
          </div>
          <div className="w-56 md:w-64  -mt-16  rounded-lg overflow-hidden">
            <div className="flex justify-center items-center">
              <button
                onClick={() => document.getElementById("profileImage").click()}
              >
                {!profileImage ? (
                  <img src={profile2} alt="" />
                ) : (
                  <img
                    className="w-[100px] h-[100px] bg-black rounded-full"
                    alt=""
                    src={URL.createObjectURL(profileImage)}
                  />
                )}
              </button>
              <input
                type="file"
                className="hidden"
                id="profileImage"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
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
