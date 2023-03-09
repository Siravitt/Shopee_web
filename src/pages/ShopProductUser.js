import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import CardShop from "../components/CardShop";
import BottomNavbar from "../layouts/BottomNavbar";
import {
  thunkFetchAllProductByShopId,
  thunkGetShopInfoPublic,
} from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { formatNumber } from "../reduxStore/formatNumber";

export default function ShopProductUser() {
  let { shopId } = useParams();
  const dispatch = useDispatch();
  const stateShop = useSelector((state) => state.allProduct.shopInfo);
  const state = useSelector((state) => state.allProduct.productFilterShop);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    dispatch(thunkFetchAllProductByShopId(shopId));
  }, [dispatch]);
  useEffect(() => {
    dispatch(thunkGetShopInfoPublic(shopId));
  }, [dispatch]);

  // console.log("kram1", shopId);
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      {/* header */}
      <div className="w-[390px] h-[183px] pl-[24px] pt-[50px] px-4 bg-red-400 flex fixed ">
        <img
          src={stateShop.profileImage}
          className="w-[89px] h-[89px] rounded-full"
          alt=""
        ></img>
        <div className="flexbox">
          <div className="text-3xl ml-8  text-white flex item-center font-bold ">
            {stateShop.name}
          </div>
          <div className=" w-[230px] ml-8 my-4 text-white flex item-center  ">
            {stateShop.description}
          </div>
        </div>
      </div>

      {/* +++++++++++++++++++++ END logoProduct shop ++++++++++++++++++ */}

      <div className="mx-4 text-xl font-bold m-2 mb-4 mt-[183px] pt-4">
        <h1>Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 mb-16 mx-2">
        <>
          {state?.productShopId?.map((item) => {
            return (
              <div className="" key={item.id + "cardShop"}>
                <Link to={`/product/${item.id}`}>
                  <div
                    className="w-auto h-auto border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

                    // key={}
                    // onClick={() => {

                    // }}
                  >
                    <div className="w-full h-52">
                      <img
                        className="w-full h-full p-auto rounded-t-lg object-cover "
                        src={item.ProductImages.find((i) => !!i.isMain)?.image}
                        alt="product"
                        key={item.id + "cardImage"}
                      />
                    </div>

                    <div className="px-3 pb-1">
                      <h5 className="text-xl tracking-tight text-gray-900 flex justify-left pl-0 pt-2">
                        {item.name}
                      </h5>

                      <div className="flex justify-between">
                        <span className="text-[20px] mt-[8px] text-gray-900  text-red">
                          {formatNumber(Number(item.price))}
                        </span>
                        <div className="text-black  font-medium rounded-lg text-sm mt-[16px]   text-center  ">
                          ขายแล้ว 0 ชิ้น
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      </div>

      <BottomNavbar />
    </div>
  );
}
