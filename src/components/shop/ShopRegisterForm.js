import { useState } from "react";
import { shopRegister } from "../../apis/auth-shop-api";
import Input from "../Input";

const initialInput = {
  shopName: "",
  address: "",
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
    <form
      className="flex flex-col gap-4 text-white text-2xl font-bold mx-8 pt-32"
      onSubmit={handleSubmitForm}
    >
      <Input
        name="shopName"
        label="Shop-Name"
        value={input.shopName}
        onChange={handleChangeInput}
      />
      {/* <Input
        name="address"
        label="Address"
        value={input.address}
        onChange={handleChangeInput}
      /> */}

      <div className="flex justify-center py-8">
        <button className="w-[200px] bg-white py-2 rounded-xl text-red-300 font-bold text-2xl hover:bg-red-300 duration-200 cursor-pointe2">
          Register Shop
        </button>
      </div>
    </form>
  );
}
