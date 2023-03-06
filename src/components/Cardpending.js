import { thunkFetcheckProductUser } from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Cardpending(props) {
  const dispatch = useDispatch();

  const cardPenUser = useSelector(
    (state) => state.allProduct.checkoutUser.order
  );

  useEffect(() => {
    dispatch(thunkFetcheckProductUser(props.pending));
  }, [dispatch]);

  return (
    <>
      {cardPenUser?.map((item) => {
        console.log("item", item);
        return (
          <div className="" key={item.id}>
            <div
              className="w-auto h-auto  border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

              // key={}
              // onClick={() => {

              // }}
            >
              <div className="px-3 pb-1">
                <h5 className="text-xl tracking-tight text-gray-900 flex justify-left pl-0 pt-2"></h5>

                <div className="flex justify-between">
                  <span className="text-[20px] mt-[8px] text-gray-900  text-red">
                    {/* {item?.totalPrice}
                    {item?.Order?.totalPrice} */}
                  </span>

                  <div className="w-[100%] h-auto pb-[16px]">
                    <div className="flex justify-between px-[16px] pt-[8px]">
                      <h1>ชื่อร้าน</h1>
                      <h1>อยู่ระหว่างจัดส่ง</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between px-[16px] pt-[8px]">
                      <h2>ชื่อสินค้า</h2> <h2>{item?.Product?.name}</h2>
                      <span>x2</span>
                    </div>

                    {/* total */}
                    <div className="flex justify-between px-[16px] pt-[8px]">
                      <div></div>
                      <h1>total : {item?.Order?.totalPrice}</h1>
                    </div>
                    <div className="flex justify-between px-[16px] pt-[8px]"></div>
                  </div>
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
