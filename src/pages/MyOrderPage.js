import HeaderProfile from "../components/header/HeaderProfile";
import OrderNavbar from "../components/navbar/OrderNavbar";

export default function MyOrderPage() {
  return (
    <>
      <div className="w-full min-h-[844px] bg-white mx-auto border  ">
        <HeaderProfile />
        <OrderNavbar />
      </div>
    </>
  );
}
