import { useEffect } from "react";
import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import { getAccessToken } from "../../src/utils/local-storage";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

export default function MyOrderPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!getAccessToken()) {
  //     navigate("/Authenticate");
  //   }
  // }, []);
  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border ">
        <HeaderProfile />

        <div className="mt-10">
          <OrderNavbar />
        </div>
      </div>
    </>
  );
}
