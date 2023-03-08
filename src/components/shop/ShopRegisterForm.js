import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shopRegister } from "../../apis/auth-shop-api";

const initialInput = {
  name: "",
  address: "",
  subDistrict: "",
  district: "",
  province: "",
  postalCode: "",
};

export default function ShopRegisterForm() {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await shopRegister(input);
      setInput(initialInput);
      navigate("/shop-home")
    } catch (err) {
      // console.log(err.data?.response);
      console.log(err.response?.data);
    }
  };
  return (
    <div
      className="flex flex-col text-gray-500 bg-white mx-8 rounded-xl mt-36
    "
    >
      <form className="gap-4 text-sm mx-8 pt-2" onSubmit={handleSubmitForm}>
        {/* <h3 className=" flex justify-center text-xl font-semibold mt-3">
          Register Shop
        </h3> */}
        <div className="relative">
          <label className=" bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Shop Name
          </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
            className=" border border-blue-400 bg-white mb-4 mt-6 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            value={input.address}
            onChange={handleChangeInput}
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Sub District
          </label>
          <input
            type="text"
            name="subDistrict"
            value={input.subDistrict}
            onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            District
          </label>
          <input
            type="text"
            name="district"
            value={input.district}
            onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Province
          </label>
          <input
            type="text"
            name="province"
            value={input.province}
            onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            value={input.postalCode}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center pt-2">
          <button className="w-full bg-blue-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-blue-200 duration-200 cursor-pointe2">
            Submit
          </button>
        </div>
        <div className="text-sm py-4 flex justify-center underline">
          <Link to="/myOrderPage">Go back to user profile</Link>
        </div>
      </form>
    </div>
  );
}
