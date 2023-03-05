import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";
import Logo2 from "../images/logo2.png";

export default function OrderPage(order) {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border  ">
        <HeaderProfile />
        <div className="mt-10">
          <OrderNavbar order="opacity-40" />
        </div>
        <div className="flex justify-center items-center mt-16">
          <img src={Logo2} alt="" />
        </div>
      </div>
    </>
  );
}
