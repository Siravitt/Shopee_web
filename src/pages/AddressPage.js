import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SmallLine from "../components/SmallLine";

export default function AddressPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <div className="w-[390px] h-[70px] bg-orange-400  flex  items-center ">
          <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
          <div className="text-[25px] text-white font-bold ml-5">
            My Address
          </div>
        </div>
        <div className="w-[388px] h-[32px] bg-gray-200">
          <div className="text-[16px] text-gray-500 ml-5 flex justify-items-center py-1">
            Address
          </div>
        </div>

        <div className="w-[390px] h-[140px] bg-white  ">
          <div className=" flex space-x-4 ">
            <div className="text-[16px] text-black ml-5 py-2">John </div>
            <div className="text-[15px] text-gray-400 py-2">
              | (+66) 12 345 6789
            </div>
          </div>
          <div className="text-[15px] text-gray-400 py-2 ml-5">
            123/45 Mint tower Bantadthong,Rd Bantadthong Bangkok 12345
          </div>
          <button class="bg-transparent hover:bg-orange-400 text-orange-400 font-semibold hover:text-white py-0.5 ml-5 px-2 border border-orange-400 hover:border-transparent rounded">
            Default
          </button>
        </div>

        <SmallLine />

        <div className="w-[390px] h-[140px] bg-white  ">
          <div className=" flex space-x-4 ">
            <div className="text-[16px] text-black ml-5 py-2">John </div>
            <div className="text-[15px] text-gray-400 py-2">
              | (+66) 12 345 6789
            </div>
          </div>
          <div className="text-[15px] text-gray-400 py-2 ml-5">
            123/45 Mint tower Bantadthong,Rd Bantadthong Bangkok 12345
          </div>
        </div>
        <SmallLine />
        <div>
          <button class="w-[390px] h-[60px] bg-white hover:bg-blue-500 text-orange-400 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
            ⊕ Add New Address
          </button>
        </div>
      </div>
    </>
  );
}
