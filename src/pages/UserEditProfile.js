import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profile2 from "../images/profile2.png";
import Red from "../images/Red.png";

export default function UserEditProfile() {
  const dispatch = useDispatch();
  const updateInfo = useSelector((state) => state.Formdata);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    // category:"",
    // image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("userName", userName);
    // formData.append("phone", phone);
    // formData.append("address", address);
    // formData.append("subDistric", subDistrict);
    // formData.append("distric", distric);
    // formData.append("province", province);
    // formData.append("category", category);
    // formData.append("image", image);
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
            <div className="py-2 text-center font-bold tracking-wide text-white text-xl">
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
                  value={formData.firstName}
                  // onChange={handleChangeInput}
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
                  value={formData.lastName}
                  // onChange={handleChangeInput}
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
                value={formData.userName}
                // onChange={handleChangeInput}
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
                value={formData.email}
                // onChange={handleChangeInput}
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
                value={formData.phone}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>

            <div className="relative">
              <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
                value={formData.address}
                // onChange={handleChangeInput}
              />
            </div>

            <div className="relative">
              <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                Sub District
              </label>
              <input
                type="text"
                name="subDistrict"
                value={formData.subDistrict}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>
            <div className="relative">
              <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                District
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>
            <div className="relative">
              <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                Province
              </label>
              <input
                type="text"
                name="province"
                value={formData.province}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
              />
            </div>
            <div className="relative">
              <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                className=" border border-red-400 bg-white my-4 rounded-md py-3 pl-4 block w-full sm:text-sm"
                value={formData.postalCode}
                // onChange={handleChangeInput}
              />
            </div>
            <div className="flex justify-center pt-2 ">
              <button className="w-full bg-red-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-red-700 duration-200 cursor-pointe2">
                Submit
              </button>
            </div>
            <div className="text-sm pt-4 flex justify-center underline pb-12">
              <Link to="/MyOrderPage">Go back to user profile</Link>
            </div>
          </form>

          {/* End User Edit Form */}
        </div>
      </div>
    </>
  );
}
