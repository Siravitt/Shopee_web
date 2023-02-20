import React from "react";
import HeaderSearch from "../components/HeaderSearch.js";
import Card from "../components/Card.js";

export default function Category() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />
        <div className="w-[390px] mt-20">
          <div className="mx-4 text-2xl font-bold my-2">
            <h1>Category</h1>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 mb-16 mx-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
