import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import Logo2 from "../images/logo2.png";
import OrderListForShopUser from "./OrderListForShopUser";
import Cardpending from "../components/Cardpending";

export default function PendingPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border static ">
        <div className="absolute mt-4 ml-4">
          <Link to="/checkout">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <HeaderProfile />
        <OrderNavbar pending="opacity-40" />
        <Cardpending pending={"PENDING"} />
        {/* <OrderListForShopUser /> */}
        <div className="flex justify-center items-center mt-16">
          <img src={Logo2} alt="" />
        </div>
      </div>
    </>
  );
}
