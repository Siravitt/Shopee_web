import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import Logo2 from "../images/logo2.png";
import OrderListForShopUser from "./OrderListForShopUser";
import Cardpending from "../components/Cardpending";

export default function PendingPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border  ">
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
