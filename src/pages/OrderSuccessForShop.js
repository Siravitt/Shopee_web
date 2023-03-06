// import HeaderProfile from "../components/header/HeaderProfile";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import OrderNavbar from "../components/navbar/OrderNavbar";
import OrderListForShop from "./OrderListForShop";
import Pending from "../images/Pending.png";
import ReadyToShip from "../images/ReadyToShip.png";
import Shipping from "../images/Shipping.png";
import { Link } from "react-router-dom";
import CardpendingShop from "../components/CardpendingShop";

export default function OrderSuccessForShop() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <div className="h-[100px] w-[390px] flex px-[10px]  px-10">
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <Link to="/PendingForShop">
              <img className=" w-[40px] opacity-40 " src={Pending} alt="" />
            </Link>
            <h1 className="opacity-40 ">Pending</h1>
          </div>
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <Link to="/ShipingForShop">
              <img className=" w-[40px] opacity-40 " src={Shipping} alt="" />
            </Link>
            <h1 className="opacity-40">Shipping</h1>
          </div>
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <img className=" w-[40px] " src={ReadyToShip} alt="" />

            <h1 className="">Order Success</h1>
          </div>
        </div>
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
