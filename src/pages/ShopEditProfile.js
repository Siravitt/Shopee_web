import React from "react";
import { Link } from "react-router-dom";
import editShop from "../images/editShop.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const initialInput = {
  shopName: "",
  address: "",
  subDistrict: "",
  district: "",
  province: "",
  postalCode: "",
};

export default function ShopEditProfile() {
  return (
    <div className="w-[390px] min-h-[845px] bg- mx-auto border bg-blue-400">
      <div className="w-full flex flex-row justify-between h-[70px] px-4 items-center">
        <Link to="/myShoppage">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <h4 className="text-2xl text-white font-bold px-20 mr-10">Edit Shop</h4>
      </div>
      <div className=" flex justify-center">
        <img src={editShop} alt="" />
      </div>
      <form className="gap-4 p-8 bg-white mt-4 rounded-xl mx-4">
        <div className="flex items-center justify-center w-full border rounded-xl border-blue-400 ">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-48 border-blue-400 rounded-xl cursor-pointer bg-blue-50 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-blue-400 ">
                <span className="font-semibold">Upload Shop Photo</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="relative">
          <label className=" bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Shop Name
          </label>
          <input
            type="text"
            name="shopName"
            // value={input.shopName}
            // onChange={handleChangeInput}
            className=" border border-blue-400 bg-white mb-4 mt-6 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="border border-blue-400 bg-white my-4 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
            // value={input.address}
            // onChange={handleChangeInput}
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Sub District
          </label>
          <input
            type="text"
            name="subDistrict"
            // value={input.subDistrict}
            // onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            District
          </label>
          <input
            type="text"
            name="district"
            // value={input.district}
            // onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Province
          </label>
          <input
            type="text"
            name="province"
            // value={input.province}
            // onChange={handleChangeInput}
            className="border border-blue-400 bg-white my-4 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
          />
        </div>
        <div className="relative">
          <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            className="border border-blue-400 bg-white my-4 rounded-md py-2 pl-10 pr-4 block w-full sm:text-sm "
            // value={input.postalCode}
            // onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center pt-2">
          <button className="w-full bg-blue-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-blue-200 duration-200 cursor-pointe2">
            Submit
          </button>
        </div>
        <div className="text-sm pt-4 flex justify-center underline">
          <Link to="/myShopPage">Go back to shop profile</Link>
        </div>
      </form>
    </div>
  );
}
