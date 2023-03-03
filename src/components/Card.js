import { thunkSearchProduct } from "../reduxStore/ProductSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const dispatch = useDispatch();

  const cardList = useSelector((state) => state.allProduct.cardList);

  return (
    <>
      {cardList?.length > 0 &&
        cardList?.map((item) => {
          return (
            <div className="" key={item.id + "card"}>
              <Link to={`/product/${item.id}`}>
                <div
                  className="w-auto h-auto border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

                  // key={}
                  // onClick={() => {

                  // }}
                >
                  <div className=" ">
                    {item.ProductImages?.map((data) => {
                      return (
                        <img
                          className="p-auto rounded-t-lg  "
                          src={data.image}
                          alt="product"
                          key={item.id + "cardImage"}
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
                        {item.price}
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
  );
}
