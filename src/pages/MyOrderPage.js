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
      <div className="w-full min-h-[844px] bg-white mx-auto border ">
        <HeaderProfile />

        <p className="mx-8 mt-6 text-red-400 text-lg font-bold  ">
          Order Status
        </p>
        <div className="my-3 bg-red-100 mx-6 rounded-xl justify-between  ">
          <OrderNavbar />
        </div>

        <div className="" key={item.id}>
          {/* UserName */}
          <p className="text-red-400 text-md font-bold mx-8 ">UserName</p>
          <p className="text-gray-500 text-md mx-8">{item.userName}</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />

          {/* FirstName */}
          <p className="text-red-400 text-md font-bold mx-8 uppercase">
            First Name
          </p>
          <p className="text-gray-500 text-md mx-8 ">{item.firstName}</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />

          {/* LastName */}
          <p className="text-red-400  text-md font-bold mx-8 uppercase">
            Last Name
          </p>
          <p className="text-gray-500 text-md mx-8 ">{item.lastName}</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />

          {/* Email */}
          <p className="text-red-400 text-md font-bold mx-8 uppercase">Email</p>
          <p className="text-gray-500 text-md mx-8 ">{item.email}</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />

          {/* Phone */}
          <p className="text-red-400 text-md font-bold mx-8 uppercase">Phone</p>
          <p className="text-gray-500 text-md  mx-8 ">{item.phone}</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
          <p className="text-red-400 text-md  font-bold mx-8 uppercase">
            Address
          </p>
          <p className="text-gray-500 text-md mx-8 ">Address</p>
          <hr className="mx-8 border-1 my-2 border-red-400" />
        </div>
      </div>
    </>
  );
}
