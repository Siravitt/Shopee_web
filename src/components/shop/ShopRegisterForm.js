import { useState } from "react";
import { Link } from "react-router-dom";
import { shopRegister } from "../../apis/auth-shop-api";
import Input from "../Input";

const initialInput = {
  shopName: "",
  address: "",
  subDistrict: "",
  district: "",
  province: "",
  postalCode: "",
};

export default function ShopRegisterForm() {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await shopRegister(input);
      setInput(initialInput);
    } catch (err) {
      console.log(err.data?.response);
    }
  };
  return (
    <div
      className="flex flex-col bg-white mx-8 rounded-xl mt-36
    "
    >
      <form
        className="gap-4 text-blue-400 text-sm font-bold mx-8 pt-2"
        onSubmit={handleSubmitForm}
      >
        <Input
          type="text"
          name="shopName"
          // label="Shop Name"
          value={input.shopName}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="address"
          value={input.address}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="subDistrict"
          value={input.subdistrict}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="district"
          value={input.district}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="province"
          value={input.province}
          onChange={handleChangeInput}
        />
        <Input
          type="number"
          name="postalCode"
          value={input.postalCode}
          onChange={handleChangeInput}
        />
        <div className="flex justify-center pt-6">
          <button className="w-full bg-blue-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-blue-200 duration-200 cursor-pointe2">
            Submit
          </button>
        </div>
        <div className="text-sm py-4 flex justify-center">
          <Link to="/myOrderPage">Go back to user profile</Link>
        </div>
      </form>
    </div>
  );
}
