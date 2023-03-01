import { useEffect } from "react";
import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import { getAccessToken } from "../../src/utils/local-storage";
import { useNavigate } from "react-router-dom";

export default function MyOrderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/Authenticate");
    }
  }, []);
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfile />
        <OrderNavbar />
      </div>
    </>
  );
}
