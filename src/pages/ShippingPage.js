import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import Logo2 from "../images/logo2.png";
import OrderListForShopUser from "./OrderListForShopUser";
import Cardpending from "../components/Cardpending";

export default function ShippingPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border  ">
        <div className="absolute mt-4 ml-4">
          <Link to="/PendingPage">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <HeaderProfile />
        <div className="my-3 bg-red-100 mx-6 rounded-xl justify-between mt-6 ">
          <OrderNavbar shipping="opacity-40" />
        </div>
        <Cardpending pending={"SHIPPING"} />

        {/* <OrderListForShopUser /> */}
        <div className="flex justify-center items-center mt-16">
          <img src={Logo2} alt="" />
        </div>
      </div>
    </>
  );
}
