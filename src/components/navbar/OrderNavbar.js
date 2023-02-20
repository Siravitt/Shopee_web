import Pending from "../../images/Pending.png";
import ReadyToShip from "../../images/ReadyToShip.png";
import Shipping from "../../images/Shipping.png";

export default function OrderNavbar(props) {
  return (
    <>
      <div className="h-[100px] w-[390px] flex px-[10px]  px-10">
        <div
          className={` flex flex-col justify-center w-[150px]  items-center ${props.shipping} ${props.order}`}
        >
          <img className=" w-[40px] " src={Pending} alt="" />

          <h1 className="\ ">Pending</h1>
        </div>
        <div
          className={` flex flex-col justify-center w-[150px]  items-center ${props.pending} ${props.order}`}
        >
          <img className=" w-[40px] " src={Shipping} alt="" />

          <h1 className="">Shipping</h1>
        </div>
        <div
          className={` flex flex-col justify-center w-[150px]  items-center ${props.pending}  ${props.shipping}`}
        >
          <img className=" w-[40px] " src={ReadyToShip} alt="" />

          <h1 className="">Order Success</h1>
        </div>
      </div>
    </>
  );
}
