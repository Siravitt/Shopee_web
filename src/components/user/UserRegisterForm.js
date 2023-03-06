import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // ======================================================
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhone, setPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, SetUserNameColor] = useState("");
  const [NameFirstColor, setNameFirstColor] = useState("");
  const [NameLastColor, setLastColor] = useState("");
  const [PhoneColor, setPhoneColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");
  // ======================================================
  const handleSubmitForm = async (e) => {
    let errorCheck = false;
    try {
      e.preventDefault();
      // ============================================

      if (input.userName.length > 3) {
        setErrorUserName("");
        SetUserNameColor("green");
      } else {
        setErrorUserName("UserNameไม่ถูกต้อง");
        SetUserNameColor("red");
        errorCheck = true;
      }
      if (input.firstName.length > 3) {
        setErrorFirstName("");
        setNameFirstColor("green");
      } else {
        setErrorFirstName("ชื่อจริงไม่ถูกต้อง");
        setNameFirstColor("red");
        errorCheck = true;
      }

      if (input.lastName.length > 3) {
        setErrorLastName("");

        setLastColor("green");
      } else {
        setErrorLastName("เบอร์ไม่ถูกต้อง");
        setLastColor("red");
        errorCheck = true;
      }

      if (input.phone.length > 8) {
        setPhone("");
        setPhoneColor("green");
      } else {
        setPhone("test");
        setPhoneColor("red");
        errorCheck = true;
      }

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
        if (
          input.confirmPassword != "" &&
          input.confirmPassword === input.password
        ) {
          setErrorRePassword(" ");
          setErrorRePassword("");
          setPasswordColor("green");
        } else {
          setErrorRePassword("กรุณากยืนยัน password ให้ถูกต้อง");
          setRePasswordColor("red");
          errorCheck = true;
        }
      } else {
        setErrorPassword("พาสเวิร์ดต้องมากกว่า 6 ตัวอักษร");
        setErrorRePassword("กรุณากยืนยัน password");
        setPasswordColor("red");
        setRePasswordColor("red");
        errorCheck = true;
      }
      if (errorCheck) {
        throw new Error("wrong");
      }
      // ============================================
      await userRegister(input);
      setInput(initialInput);
      navigate("/user-login");
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        border={userNameColor}
        name="userName"
        label="Username"
        value={input.userName}
        onChange={handleChangeInput}
        errorText={errorUserName}
      />
      <Input
        border={emailColor}
        errorText={errorEmail}
        name="email"
        label="E-mail"
        value={input.email}
        onChange={handleChangeInput}
      />

      <Input
        border={NameFirstColor}
        errorText={errorFirstName}
        name="firstName"
        label="First name"
        value={input.firstName}
        onChange={handleChangeInput}
      />
      <Input
        border={NameLastColor}
        errorText={errorLastName}
        name="lastName"
        label="Last name"
        value={input.lastName}
        onChange={handleChangeInput}
      />

      <Input
        border={PhoneColor}
        errorText={errorPhone}
        name="phone"
        label="phone number"
        value={input.phone}
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
      <Input
        border={rePasswordColor}
        errorText={errorRePassword}
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
