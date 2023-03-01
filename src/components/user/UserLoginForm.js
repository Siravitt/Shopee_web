import { useState } from "react";
// import { userLogin } from "../../apis/auth-user-api";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { thunkLogin } from "../../reduxStore/AuthSlice";
import { useDispatch } from "react-redux";

// import UserLoginGoogleFrom from "./UserLoginGoogleFrom";

// <UserLoginGoogleFrom />

const initialInput = {
  email: "",
  password: "",
};

export default function UserLoginForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();
      dispatch(thunkLogin(input));
      setInput(initialInput);
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
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
        type="Password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <div className="flex justify-center py-4">
        <Link to="/MyOrderPage">
          <button className="w-[200px] bg-red-400 py-1 rounded-xl text-white font-bold hover:bg-red-300 duration-200">
            Log in
          </button>
        </Link>
      </div>
    </form>
  );
}
