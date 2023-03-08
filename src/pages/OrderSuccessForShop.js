// import HeaderProfile from "../components/header/HeaderProfile";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import OrderNavbar from "../components/navbar/OrderNavbar";
import OrderListForShop from "./OrderListForShop";
import Pending from "../images/Pending.png";
import ReadyToShip from "../images/ReadyToShip.png";
import Shipping from "../images/Shipping.png";
import { Link } from "react-router-dom";
import CardpendingShop from "../components/CardpendingShop";
import ShopOrder from "../components/shop/ShopOrder";

export default function OrderSuccessForShop() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <ShopOrder />
        {/* <OrderNavbar /> */}
        <hr />
        {/* body */}
        {/* <CardpendingShop pendingShop={"SUCCESS"} /> */}
        <CardpendingShop pendingShop={"SUCCESS"} />

        {/* body */}
        <div className="h-[80px] w-[390px] flex px-[10px]  px-10"></div>
      </div>
    </>
  );
}
