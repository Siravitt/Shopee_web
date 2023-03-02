// import Logo from "./images/logo.png";
import Card from "../components/Card";
import MobileLayoutForShop from "../layouts/MobileLayoutForShop";
import { Link } from "react-router-dom";
import HeaderProfileForShop from "../components/header/HeaderProfileForShop";

function ShopHome() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      {/* header */}
      {/* <div className="w-[390px] h-[183px] pl-[24px] pt-[50px] px-4 bg-red-400 flex fixed ">
        <img
          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
          className="w-[89px] h-[89px] rounded-full"
        ></img>
        <div className="flexbox w-[100%] pl-[26px] pt-[6px]">
          <div className="text-[20px]  text-white font-bold ">Shop's name</div>
          <button className="text-[16px] p-[4px] bg-white text-red-400 font-bold">
            Edit Profile
          </button>
        </div>
      </div> */}
      <HeaderProfileForShop />

      {/* header */}
      <div className="flex items-center justify-between h-[64px] bg-white">
        <h2 className="ml-6 font-bold text-blue-500 text-xl">Products</h2>
        <Link to="/addProduct">
          <button className="text-[16px] p-[4px] bg-blue-500  text-white mr-6 font-bold px-2 rounded">
            Add Product
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 mt-[240px] ">
        <Card />
      </div>
      <div className="w-full h-[54px] mb-[-5px] bg-white "></div>
      {/* <MobileLayoutForShop /> */}
    </div>
  );
}

export default ShopHome;
