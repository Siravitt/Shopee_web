import React from "react";
import Card from "../components/Card";
import BottomNavbar from "../layouts/BottomNavbar";

export default function ShopProductUser() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      {/* header */}
      <div className="w-[390px] h-[183px] pl-[24px] pt-[50px] px-4 bg-red-400 flex fixed ">
        <img
          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
          className="w-[89px] h-[89px] rounded-full"
        ></img>

        <div className="text-3xl ml-8 my-4 text-white flex item-center font-bold ">
          Shop's name
        </div>
      </div>

      {/* +++++++++++++++++++++ END logoProduct shop ++++++++++++++++++ */}

      <div className="mx-4 text-xl font-bold m-2 mb-4 mt-[183px] pt-4">
        <h1>Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 mb-16 mx-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <BottomNavbar />
    </div>
  );
}
