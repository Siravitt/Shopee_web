import { Link } from "react-router-dom";

import Pending from "../../images/Pending.png";
import ReadyToShip from "../../images/ReadyToShip.png";
import Shipping from "../../images/Shipping.png";

export default function OrderNavbar(props) {
  return (
    <>
      <div className="h-[100px] w-full flex px-[10px]  ">
        <div
          className={` flex flex-col justify-center w-[150px]  items-center ${props.shipping} ${props.order}`}
        >
          <Link to="/PendingPage">
            <img className=" w-[40px] " src={Pending} alt="" />
          </Link>

          <h1 className="\ ">Pending</h1>
        </div>
        <div
          className={` flex flex-col justify-center w-[180px]  items-center ${props.pending} ${props.order}`}
        >
          <Link to="/ShippingPage">
            <img className=" w-[40px] " src={Shipping} alt="" />
          </Link>

          <h1 className="">Shipping</h1>
        </div>
        <div
          className={` flex flex-col justify-center w-[180px]  items-center ${props.pending}  ${props.shipping}`}
        >
          <Link to="/OrderPage">
            <img className=" w-[40px] " src={ReadyToShip} alt="" />
          </Link>

          <h1 className="">Success</h1>
        </div>
      </div>
    </>
  );
}
