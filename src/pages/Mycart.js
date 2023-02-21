import Cart from "../components/Cart";
import Vectorbasket from "../images/Vectorbasket.png";
import SmallLine from "../components/SmallLine";
import BigLine from "../components/BigLine";

export default function Mycart() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto">
      <div className="w-full h-[70px] px-4 bg-orange-400 flex flex-row justify-between items-center">
        <div className="text-[25px] text-white font-bold ">My Cart</div>
        <img src={Vectorbasket} alt="" />
      </div>

      <div className=" flex space-x-6">
        <input type="checkbox" className="checkbox ml-5 mt-2" />
        <div className="text-[25px] text-black font-bold ml-20 mt-2 ">
          Shop Name
        </div>
      </div>

      <div>
        <Cart />
      </div>
      <div className=" mt-10">
        <SmallLine />
      </div>
      <div>
        <Cart />
      </div>
      <div className=" mt-10">
        <BigLine />
      </div>
      <div className="h-[50px] w-[390px] bg-white flex gap-4 border-t fixed bottom-0">
        <div className="w-1/2 h-full flex flex-col items-end">
          <div className="text-[14px]">All</div>
        </div>
        <button className="w-1/2 h-full bg-orange-400 flex items-center justify-center text-white font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}
