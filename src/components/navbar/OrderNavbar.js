import Pending from "../../images/Pending.png";
import ReadyToShip from "../../images/ReadyToShip.png";
import Shipping from "../../images/Shipping.png";

export default function OrderNavbar() {
  return (
    <>
      <div className="h-[100px] w-[390px] flex justify-between items-center px-10 bg-slate-2git 00">
        <div className="flex flex-col justify-center items-center">
          <img src={Pending} alt="" />

          <h1>Pending</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className=" w-[40px]" src={ReadyToShip} alt="" />

          <h1>Reading To ship</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Shipping} alt="" />
          <h1>Shipping</h1>
        </div>
      </div>
    </>
  );
}
