import {
  // thunkFetchAllProduct,
  thunkFetchAllProductByCatId,
} from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardCat(props) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.allProduct.productFilter.products);
  console.log(state);
  useEffect(() => {
    dispatch(thunkFetchAllProductByCatId(props.catId));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(thunkFetchAllProduct());
  //   // console.log("มามั้ย");
  // }, [dispatch]);
  return (
    <>
      {state?.map((item) => {
        return (
          <div className="" key={item.id + "hello"}>
            <Link to={`/product/${item.id}`}>
              <div
                className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

                // onClick={() => {

                // }}
              >
                <div className=" ">
                  {
                    <img
                      className="p-auto rounded-t-lg  "
                      src={item?.ProductImages?.find((i) => !!i.isMain)?.image}
                      alt="product"
                      key={item.id + "cardImage"}
                    />
                  }
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
            </Link>
          </div>
        );
      })}
    </>
  );
}
