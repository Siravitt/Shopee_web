/* eslint-disable array-callback-return */
import { thunkFetchAllProduct } from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const dispatch = useDispatch();

  const state = useSelector(state => state.allProduct);
  useEffect(() => {
    dispatch(thunkFetchAllProduct());
  }, [dispatch]);
  return (
    <>
      {state.cardList.map(item => {
        return (
          <div className="" key={item.id + "card"}>
            <Link to={`/product/${item.id}`}>
              <div className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow">
                {item.ProductImages.map(el => {
                  if (el.isMain === true) {
                    return (
                      <img
                        key={el.id}
                        className="p-auto rounded-t-lg w-[172px] h-[172px] object-cover"
                        src={el.image}
                        alt=""
                      />
                    );
                  }
                })}
                <div className="px-3 pb-1">
                  <h5 className="text-[16px] font-bold tracking-tight text-black flex justify-left pl-0 pt-2">
                    {item.name}
                  </h5>

                  <div className="flex justify-between">
                    <span className="text-[14px] mt-[8px] text-black">
                      ฿ {item.price}
                    </span>
                    <div className="text-black rounded-lg text-[12px] mt-[16px] text-center">
                      ขายแล้ว {item.totalSale} ชิ้น
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
