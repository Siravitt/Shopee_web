import { useState } from "react";
import { userRegister } from "../../apis/auth-user-api";
import Input from "../Input";

const initialInput = {
  userName: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function UserRegisterForm() {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await userRegister(input);
      setInput(initialInput);
    } catch (err) {
      console.log(err.data?.response);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        name="userName"
        label="Username"
        value={input.userName}
        onChange={handleChangeInput}
      />
      <Input
        name="email"
        label="E-mail"
        value={input.email}
        onChange={handleChangeInput}
      />
      <Input
        name="firstName"
        label="First name"
        value={input.firstName}
        onChange={handleChangeInput}
      />
      <Input
        name="lastName"
        label="Last name"
        value={input.lastName}
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
        <button className="w-[200px] bg-red-500 py-1 rounded-xl text-white font-bold hover:bg-orange-300 duration-200">
          Create account
        </button>
      </div>
    </form>
  );
}
