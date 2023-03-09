import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import OrderListForShop from "./OrderListForShop";
import ShopOrder from "../components/shop/ShopOrder";
export default function MyShopPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <HeaderProfileForShop />
        {/* <OrderNavbar /> */}
        <ShopOrder />
        {/* <OrderNavbar /> */}
        <hr />
        {/* body */}
        {/* <OrderListForShop /> */}
        {/* body */}
      </div>
    </>
  );
}
