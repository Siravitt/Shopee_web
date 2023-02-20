import { useState } from "react";
import { shopLogin } from "../../apis/auth-shop-api";
import Input from "../Input";

const initialInput = {
  email: "",
  password: "",
};

export default function ShopLoginForm() {
  const [input, setInput] = useState(initialInput);
  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await shopLogin(input);
      setInput(initialInput);
    } catch (err) {
      console.log(err.data?.response);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        name="email"
        label="E-mail"
        value={input.email}
        onChange={handleChangeInput}
      />
      <Input
        name="password"
        label="Password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <div className="flex justify-center py-4">
        <button className="w-[200px] bg-red-400 py-1 rounded-xl text-white font-bold hover:bg-red-300 duration-200">
          Log in
        </button>
      </div>
    </form>
  );
}
