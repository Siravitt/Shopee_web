import { useState } from "react";
import { userLogin } from "../../apis/auth-user-api";
import Input from "../Input";

const initialInput = {
  email: "",
  password: "",
};

export default function UserLoginForm() {
  const [input, setInput] = useState(initialInput);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await userLogin(input);
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
        <button className="w-[200px] bg-orange-400 py-1 rounded-xl text-white font-bold hover:bg-orange-300 duration-200">
          Log in
        </button>
      </div>
    </form>
  );
}
