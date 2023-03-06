import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import { getAccessToken } from "../../src/utils/local-storage";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { thunkFetchUser } from "../reduxStore/AuthSlice";

export default function MyOrderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/Authenticate");
    }
  }, []);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const getUser = useSelector((state) => state.auth.auth);

  useEffect(() => {
    dispatch(thunkFetchUser());
  }, [dispatch]);
  useEffect(() => {
    if (getUser?.id) setItem(getUser);
  }, [getUser]);
  // useEffect(() => {
  //   if (!getAccessToken()) {
  //     navigate("/Authenticate");
  //   }
  // }, []);
  return (
    <>
      return (
      <div className="w-full min-h-[844px] bg-white mx-auto border ">
        <HeaderProfile />

        <div className="my-8 bg-red-100 mx-4 rounded-xl justify-between ">
          <OrderNavbar />
        </div>

        <div className="" key={item.id}>
          <p className="text-red-400 my-2 text-md font-bold mx-8 ">
            UserName :{item.username}
          </p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 text-md my-2 font-bold mx-8 ">
            First Name: {item.firstName}
          </p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 my-2 text-md font-bold mx-8 uppercase">
            Last Name
          </p>
          <p className="text-red-400 my-2 text-sm mx-8">{item.lastName}</p>

          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 text-md my-2 font-bold mx-8">
            Email : {item.email}
          </p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 my-2 text-md font-bold mx-8">
            Phone : {item.phone}
          </p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 text-md my-2 font-bold mx-8">
            Address : Address
          </p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
        </div>
      </div>
      );
    </>
  );
}
