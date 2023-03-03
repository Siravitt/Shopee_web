import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import CardShop from "../components/CardShop";
import BottomNavbar from "../layouts/BottomNavbar";
import { thunkFetchAllProductByShopId } from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ShopProductUser() {
  let { shopId } = useParams();
  const dispatch = useDispatch();

  const state = useSelector(state => state.allProduct.productFilterShop);
  useEffect(() => {
    dispatch(thunkFetchAllProductByShopId(shopId));
  }, [dispatch]);

  // console.log("kram1", shopId);
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
        <>
          {state?.productShopId?.map(item => {
            return (
              <div className="" key={item.id + "cardShop"}>
                <div
                  className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

                  // key={}
                  // onClick={() => {

                  // }}
                >
                  <div className=" ">
                    {item.ProductImages.map(data => {
                      return (
                        <img
                          className="p-auto rounded-t-lg  "
                          src={data.image}
                          alt="product"
                          key={item.id + "cardShopMap"}
                        />
                      );
                    })}
                  </div>

                  <div className="px-3 pb-1">
                    <h5 className="text-xl tracking-tight text-gray-900 flex justify-left pl-0 pt-2">
                      {item.name}
                    </h5>

                    <div className="flex justify-between">
                      <span className="text-[20px] mt-[8px] text-gray-900  text-red">
                        100
                      </span>
                      <div className="text-black  font-medium rounded-lg text-sm mt-[16px]   text-center  ">
                        ขายแล้ว 0 ชิ้น
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>

      <BottomNavbar />
    </div>
  );
}
