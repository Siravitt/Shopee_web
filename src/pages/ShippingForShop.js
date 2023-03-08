// import HeaderProfile from "../components/header/HeaderProfile";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import CardpendingShop from "../components/CardpendingShop";
import ShopOrder from "../components/shop/ShopOrder";

export default function ShipingForShop() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <ShopOrder />
        {/* <OrderNavbar /> */}
        <hr />
        {/* body */}
        <CardpendingShop pendingShop={"SHIPPING"} />
        {/* body */}
        <div className="h-[80px] w-[390px] flex px-[10px]"></div>
      </div>
    </>
  );
}
