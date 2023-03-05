import { useState } from "react";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { thunkLogin } from "../../reduxStore/AuthSlice";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../../utils/local-storage";
import { useEffect } from "react";

const initialInput = {
  email: "",
  password: "",
};

export default function UserLoginForm() {
  const [errorEmail, setErrorEmail] = useState("");
  const [emailColor, setEmailColor] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (getAccessToken()) {
      navigate("/");
    }
    // else {
    //   alert("กรุณา Login");
    // }
  }, [navigate]);
  const [input, setInput] = useState(initialInput);
  const handleChangeInput = async e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmitForm = async e => {
    let errorCheck = false;
    try {
      e.preventDefault();

      if (input.email.includes("@") && input.email.includes(".")) {
        setErrorEmail("");
        setEmailColor("green");
      } else {
        setErrorEmail("รูปแบบ Email ไม่ถูกต้อง");
        setEmailColor("red");
        errorCheck = true;
      }

      if (input.password.length >= 6) {
        setErrorPassword("");
        setPasswordColor("green");
      } else {
        setErrorPassword("email หรือ password ไม่ถั่วต้ม");
        setPasswordColor("red");
        errorCheck = true;
      }

      if (errorCheck) {
        throw new Error("wrong");
      } else {
        await dispatch(thunkLogin(input));
        setInput(initialInput);
        setPasswordColor("green");
        if (getAccessToken()) {
          navigate("/");
        } else {
          setErrorEmail("รูปแบบ Email ไม่ถูกต้อง");
          setEmailColor("red");
          setErrorPassword("email หรือ password ไม่ถั่วต้ม");
          setPasswordColor("red");
        }
      }
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        border={emailColor}
        errorText={errorEmail}
        name="email"
        label="E-mail"
        value={input.email}
        onChange={handleChangeInput}
      />
      <Input
        border={passwordColor}
        errorText={errorPassword}
        type="password"
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
