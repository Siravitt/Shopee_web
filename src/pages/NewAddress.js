import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SmallLine from "../components/SmallLine";
import BigLine from "../components/BigLine";

export default function NewAddressPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <div className="w-[390px] h-[70px] bg-red-400  flex  items-center ">
          <Link to="/address">
            <ArrowBackIcon sx={{ fontSize: 35, color: "white" }} />
          </Link>
          <div className="text-[25px] text-white font-bold ml-5">
            New Address
          </div>
        </div>
        <div className="w-[388px] h-[28px] bg-gray-200">
          <div className="text-[16px] text-gray-500 ml-5 flex justify-items-center py-1">
            Contact
          </div>
        </div>
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Reciever Name</div>
        </div>
        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Phone Number</div>
        </div>
        <div className="w-[388px] h-[28px] bg-gray-200 text-gray-500 ">
          <div className="ml-5">Address</div>
        </div>
        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Address</div>
        </div>

        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Sub District</div>
        </div>
        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">District</div>
        </div>

        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Province</div>
        </div>

        <SmallLine />
        <div className="w-[388px] h-[38px] bg-white  text-gray-400">
          <div className="ml-5 w-[388px] h-[32px] py-1">Post Code</div>
        </div>

        <SmallLine />
        <div>
          <button class="w-[390px] h-[60px] bg-white hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}
