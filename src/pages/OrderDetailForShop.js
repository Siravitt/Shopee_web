import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function OrderDetailForShop() {
  return (
    <div className="w-[390px] min-h-[845px] mx-auto bg-white border">
      <div className="w-full h-[70px] bg-red-400 flex items-center justify-center relative">
        <button className="absolute top-4 left-2">
          <Link to="/MyOrderPage">
            <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
          </Link>
        </button>
        <div className="text-white text-[20px] font-bold">Confirm Order</div>
      </div>
      <button className="w-full h-[auto] px-4 pt-4 flex gap-8">
        <LocationOnIcon sx={{ color: "orange", fontSize: 40 }} />
        <div className="text-start flex flex-col gap-1">
          <div className="text-[18px]">Delivery Address</div>
          <div className="text-[12px]">John Doe | (+66) 12 123 1212</div>
          <div className="text-[12px]">
            123 abc village, Soi Candy, District Rainbow, Bangkok 70120
          </div>
        </div>
      </button>
      <hr className="bg-gray-300 my-6" />
      <div className="px-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="font-bold">Shop name 1</div>
          <div className="font-bold">Order ID : 123</div>
        </div>
        <div className="flex gap-8">
          <div className="w-[125px] h-[100px] bg-gray-300"></div>
          <div className="flex flex-col gap-2">
            <div className="text-[14px] font-bold">Product name</div>
            <div className="text-[12px]">Product description</div>
            <div className="text-[14px] text-orange-400 font-bold">
              Price 199$
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="w-[390px] h-[40px] py-2 px-4 flex justify-between  bottom-[120px] border-t">
        <div className="text-[14px] font-bold">Order Status</div>
        <div className="text-[14px]">Pending</div>
      </div>
      <div className="w-[390px] h-[70px] py-2 px-4 flex justify-between  bottom-[50px] border-t">
        <div className="text-[14px] font-bold">Order Total (Items)</div>
        <div className="text-[14px] text-orange-400 font-bold">$623</div>
      </div>
      {/* bottom */}
      <div className="flex   pl-[20px]  ">
        <div className="flex flex-row gap-2 ">
          <input
            placeholder="Shiping Number"
            className="w-[250px] rounded-xl border px-4  bg-gray-200 mx-auto rounded-3xl text-black "
          />
          <button className="pl-6">SEND</button>
        </div>
      </div>
      <hr className="bg-gray-300 my-6 mx-6" />
      <div className="text-red-600 text-[20px] text-center font-bold">
        Cancel Order
      </div>
    </div>
  );
}
