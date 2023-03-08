import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SmallLine from "../components/SmallLine";
import BigLine from "../components/BigLine";
import { useEffect, useState } from "react";
import { createAddress, editAddress } from "../apis/address-user-api";
import { useSelector } from "react-redux";
import axios from "axios";

export default function EditAddress() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth.auth);
  let { addressId } = useParams();
  // const [showAddress, setShowAddress] = useState({});
  // console.log(showAddress);
  // console.log(showAddress?.receiverName, "addres");
  const [input, setInput] = useState({
    receiverName: "",
    receiverPhone: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
  });
  const getAddressById = async () => {
    const res = await axios.get(
      "http://localhost:8000/user/address/id-address/" + addressId,
    );
    // setShowAddress(res.data.address);
    setInput({
      receiverName: res.data.address.receiverName,
      receiverPhone: res.data.address.receiverPhone,
      address: res.data.address.address,
      subDistrict: res.data.address.subDistrict,
      district: res.data.address.district,
      province: res.data.address.province,
      postalCode: res.data.address.postalCode,
    });
  };
  useEffect(() => {
    getAddressById();
  }, []);

  const handleChangleinput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    try {
      // console.log("input", input);
      await editAddress(addressId, input);
      navigate("/Address");
      // setInput();
    } catch (err) {
      console.log(err.data?.response);
    }
  };

  console.log("input", input.receiverName);
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
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Reciever Name</div>
          <input
            type="text"
            name="receiverName"
            value={input.receiverName}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Reciever Name"
          />
        </div>
        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Phone Number</div>
          <input
            type="text"
            name="receiverPhone"
            value={input.receiverPhone}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Receiver Phone"
          />
        </div>
        <div className="w-[388px] h-[28px] bg-gray-200 text-gray-500 ">
          <div className="ml-5">Address</div>
        </div>
        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Address</div>
          <input
            type="text"
            name="address"
            value={input.address}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Address Name"
          />
        </div>

        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Sub District</div>
          <input
            type="text"
            name="subDistrict"
            value={input.subDistrict}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Sub District"
          />
        </div>
        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">District</div>
          <input
            type="text"
            name="district"
            value={input.district}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="District"
          />
        </div>

        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Province</div>
          <input
            type="text"
            name="province"
            value={input.province}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Province"
          />
        </div>

        <SmallLine />
        <div className="w-[full] h-[38px] bg-white flex text-gray-400">
          <div className="ml-5 w-[200px] h-[32px] py-1">Post Code</div>
          <input
            type="text"
            name="postalCode"
            value={input.postalCode}
            className="w-[80%] pl-3 "
            onChange={handleChangleinput}
            placeholder="Post Code"
          />
        </div>

        <SmallLine />
        <div>
          <button
            class="w-[390px] h-[60px] bg-white hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            onClick={() => {
              handleSubmitForm(addressId);
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}
