import { useState } from "react";
import { shopRegister } from "../../apis/auth-shop-api";
import Input from "../Input";
import { Link } from "react-router-dom";

const initialInput = {
  shopName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        name="shopName"
        label="shop-Name"
        value={input.shopName}
        onChange={handleChangeInput}
      />
      <Input
        name="email"
        label="E-mail"
        value={input.email}
        onChange={handleChangeInput}
      />
      <Input
        name="phone"
        label="phone"
        value={input.phone}
        onChange={handleChangeInput}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm-password"
        value={input.confirmPassword}
        onChange={handleChangeInput}
      />
      <div className="flex justify-center py-4">
        <button className="w-[200px] bg-orange-700 py-1 rounded-xl text-white font-bold hover:bg-orange-600 duration-200">
          Create account
        </button>
      </div>
      <div className="text-[14px] text-red-600 text-center hover:text-red-900">
        <Link to="/shop-login">
          <button className="underline">
            Already have an account? Login here!
          </button>
        </Link>
      </div>
    </form>
  );
}
