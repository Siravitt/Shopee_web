import { useState } from "react";
// import { userLogin } from "../../apis/auth-user-api";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { thunkLogin } from "../../reduxStore/AuthSlice";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../../utils/local-storage";
import { useEffect } from "react";
// import UserLoginGoogleFrom from "./UserLoginGoogleFrom";

// <UserLoginGoogleFrom />

const initialInput = {
  email: "",
  password: "",
};

export default function UserLoginForm() {
  // const refresh = () => window.location.reload(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (getAccessToken()) {
      navigate("/");
    }
  }, []);
  const [input, setInput] = useState(initialInput);
  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmitForm = e => {
    try {
      e.preventDefault();
      dispatch(thunkLogin(input));
      setInput(initialInput);
      setTimeout(() => {
        navigate("/");
      }, 1000);

      // navigate("/");
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
        <button className="w-[200px] bg-red-400 py-1 rounded-xl text-white font-bold hover:bg-red-300 duration-200">
          Log in
        </button>
      </div>
    </form>
  );
}
