import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SmallLine from "../components/SmallLine";
import BigLine from "../components/BigLine";

export default function Mycart() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto">
      <div className="w-full h-[60px] px-4 bg-orange-400 flex flex-row justify-between items-center">
        <Link to="/home">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <div className="text-[25px] text-white font-bold ">My Cart</div>
        <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </div>

      <div className="mx-4 my-4 flex items-center gap-4">
        <input type="checkbox" className="" />
        <div className="text-[25px] text-black font-bold">Shop Name</div>
      </div>

      <div>
        <Cart />
      </div>
      <div className=" mt-10 pb-6 ">
        <SmallLine />
      </div>
      <div>
        <Cart />
      </div>
      <div className=" mt-10">
        <BigLine />
      </div>
      <div className="h-[50px] w-[390px] bg-white flex gap-4 border-t fixed bottom-0">
        <div className="">
          <input type="checkbox" className="checkbox ml-5 mt-2" />
        </div>

        <div className="w-1/2 h-full flex flex-col items-end ">
          <div className="text-[20px]">All</div>
        </div>
        <Link to="/checkout">
          <button className="w-[157px] h-[49px] bg-orange-400 flex items-center justify-center text-white font-bold">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
