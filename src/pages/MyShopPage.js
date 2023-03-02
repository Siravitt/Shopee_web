import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import OrderListForShop from "./OrderListForShop";
import Pending from "../images/Pending.png";
import ReadyToShip from "../images/ReadyToShip.png";
import Shipping from "../images/Shipping.png";
import { Link } from "react-router-dom";
export default function MyShopPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <div className="h-[100px] w-[390px] flex px-[10px]">
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <Link to="/PendingForShop">
              <img className=" w-[40px] " src={Pending} alt="" />
            </Link>
            <h1 className="\ ">Pending</h1>
          </div>
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <Link to="/ShipingForShop">
              <img className=" w-[40px] " src={Shipping} alt="" />
            </Link>
            <h1 className="">Shipping</h1>
          </div>
          <div
            className={` flex flex-col justify-center w-[150px]  items-center `}
          >
            <Link to="/OrderSuccessForShop">
              <img className=" w-[40px] " src={ReadyToShip} alt="" />
            </Link>
            <h1 className="">Order Success</h1>
          </div>
        </div>
        {/* <OrderNavbar /> */}
        <hr />
        {/* body */}
        <OrderListForShop />
        {/* body */}
        <div className="h-[80px] w-[390px] flex px-[10px]  px-10"></div>
      </div>
    </>
  );
}
