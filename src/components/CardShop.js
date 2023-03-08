import { thunkFetchAllProductByShopId } from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardShop(props) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.allProduct.productFilterShop);
  useEffect(() => {
    dispatch(thunkFetchAllProductByShopId(props.shopId));
  }, [dispatch]);
  return (
    <>
      {state?.productShopId?.map((item) => {
        return (
          <div className="" key={item.id + "cardShop"}>
            <Link to="/addProduct">
              <div className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow bg-white border-gray-700s ">
                {item.ProductImages.map((el) => {
                  if (el.isMain === true) {
                    return (
                      <img
                        key={el.id}
                        className="w-full h-full object-cover rounded-t-lg"
                        alt=""
                        src={el.image}
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
