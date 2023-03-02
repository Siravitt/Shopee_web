import { useState } from "react";
import { Link } from "react-router-dom";
import { shopRegister } from "../../apis/auth-shop-api";
import Input from "../Input";

const initialInput = {
  shopName: "",
  // address: "",
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
      className="flex flex-col bg-white mx-8 rounded-xl mt-32
    "
    >
      <form
        className="gap-4 text-blue-400 text-2xl font-bold mx-8 pt-8"
        onSubmit={handleSubmitForm}
      >
        <p className="flex justify-center text-2xl">Register Shop Name</p>
        <Input
          className=""
          type="text"
          name="shopName"
          // label="Shop Name"
          value={input.shopName}
          onChange={handleChangeInput}
        />
        {/* <Input
        name="address"
        label="Address"
        value={input.address}
        onChange={handleChangeInput}
      /> */}

        <div className="flex justify-center pt-8">
          <button className="w-full bg-blue-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-blue-200 duration-200 cursor-pointe2">
            Submit
          </button>
        </div>
        <div className="text-sm pt-4 pb-16 flex justify-center">
          <Link to="/myOrderPage">Go back to user profile</Link>
        </div>
      </form>
    </div>
  );
}
