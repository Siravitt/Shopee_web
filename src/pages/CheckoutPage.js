import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CheckoutPage() {
  return (
    <div className="w-[390px] min-h-[845px] mx-auto bg-white border">
      <div className="w-full h-[70px] bg-orange-400 flex items-center justify-center relative">
        <button className="absolute top-4 left-2">
          <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
        </button>
        <div className="text-white text-[20px] font-bold">Checkout</div>
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
        <div className="font-bold">Shop name 1</div>
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
      <div className="w-[390px] h-[40px] py-2 px-4 flex justify-between fixed bottom-[120px] border-t">
        <div className="text-[14px] font-bold">Payment type</div>
        <div className="text-[14px]">Transfer</div>
      </div>
      <div className="w-[390px] h-[70px] py-2 px-4 flex justify-between fixed bottom-[50px] border-t">
        <div className="text-[14px] font-bold">Order Total (Items)</div>
        <div className="text-[14px] text-orange-400 font-bold">$623</div>
      </div>
      <div className="h-[50px] w-[390px] bg-white flex gap-4 border-t fixed bottom-0">
        <div className="w-1/2 h-full flex flex-col items-end">
          <div className="text-[14px]">Total payment</div>
          <div className="text-[14px] text-orange-400 font-bold">$623</div>
        </div>
        <button className="w-1/2 h-full bg-orange-400 flex items-center justify-center text-white font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}
