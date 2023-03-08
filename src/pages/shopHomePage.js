import { Link } from "react-router-dom";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
import ProductCard from "../components/shop/ProductCard";

function ShopHome() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <HeaderProfileForShop />

      {/* header */}
      <div className="flex items-center justify-between h-[64px] bg-white">
        <h2 className="ml-6 font-bold text-blue-500 text-xl">Products</h2>
        <Link
          to="/addProduct"
          className="text-[16px] p-[4px] bg-blue-500 text-white mr-6 font-bold px-2 rounded"
        >
          Add Product
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <ProductCard />
      </div>
      <div className="w-full h-[54px] mb-[-5px] bg-white "></div>
      {/* <MobileLayoutForShop /> */}
    </div>
  );
}

export default ShopHome;
