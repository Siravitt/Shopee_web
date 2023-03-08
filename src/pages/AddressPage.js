import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import SmallLine from "../components/SmallLine";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddressPage() {
  const [showAddress, setShowAddress] = useState([]);
  console.log("test", showAddress);

  const getAllAddress = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/address/all-address`,
    );
    setShowAddress(res.data);
  };
  useEffect(() => {
    getAllAddress();
  }, []);

  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        <div className="w-[390px] h-[70px] bg-red-400  flex  items-center ">
          <Link to="/MyOrderPage">
            <ArrowBackIcon
              sx={{ fontSize: 35, color: "white" }}
              className="ml-[10px]"
            />
          </Link>
          <div className="text-[25px] text-white font-bold ml-5">
            My Address
          </div>
        </div>
        <div className="w-[388px] h-[32px] bg-gray-200">
          <div className="text-[16px] text-gray-500 ml-5 flex justify-items-center py-1">
            Address
          </div>
        </div>

        {showAddress?.addresses?.map(item => {
          return (
            <div
              className="w-[390px] h-[140px] bg-white  "
              key={item.id + "card"}
            >
              <div className=" flex space-x-4 ">
                <div className="text-[16px] text-black ml-5 py-2">
                  {item?.name}
                </div>
                <div className="text-[15px] text-gray-400 py-2">
                  {item.receiverPhone}
                </div>
              </div>

              <div className="text-[15px]  text-gray-400 py-1 ml-5">
                <div className="font-bold">
                  Receiver Name : {item?.receiverName}
                </div>
                {item.address}&nbsp;
                {item.subDistrict} {item.district} {item.province}{" "}
                {item.postalCode}
              </div>
              <Link to={`/EditAddress/${item.id}`}>
                <button class="bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-0.5 ml-5 px-2 border border-blue-400 hover:border-transparent rounded">
                  Edit
                </button>
              </Link>

              <button class="bg-red-400  mb-[10px] hover:bg-red-600 text-white  font-semibold hover:text-white py-0.5 ml-5 px-2 border border-red-400 hover:border-transparent rounded">
                Delete
              </button>
              <SmallLine />
            </div>
          );
        })}

        <div>
          <Link to="/newaddress">
            <button class="w-[390px] fixed bottom-0 mt-[1px] h-[60px] bg-white hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
              ⊕ Add New Address
            </button>
          </Link>
          <div class="w-[390px] mt-[1px] h-[60px] bg-white hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
            {/* ⊕ Add New Address */}
          </div>
        </div>
      </div>
    </>
  );
}
