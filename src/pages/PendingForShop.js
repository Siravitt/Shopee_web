// import HeaderProfile from "../components/header/HeaderProfile";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import { Link } from "react-router-dom";
import CardpendingShop from "../components/CardpendingShop";
import ShopOrder from "../components/shop/ShopOrder";

export default function PendingForShop() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <ShopOrder />
        {/* <OrderNavbar /> */}
        <hr />
        {/* body */}
        <CardpendingShop pendingShop={"PENDING"} />
        {/* body */}
        <div className="h-[80px] w-[390px] flex px-[10px]"></div>
      </div>
    </>
  );
}
