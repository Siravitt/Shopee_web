import { thunkFetcheckProductShop } from "../reduxStore/ShopSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateOderShop } from "../apis/checkout-shop-api";
import { useNavigate } from "react-router-dom";

export default function Cardpending(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlechangeupdatestate = (updateid, inputstatus) => {
    updateOderShop(updateid, inputstatus);
    navigate("/ShipingForShop");
  };

  const cardPenShop = useSelector((state) => state.allShop.checkoutShop.order);
  // console.log("cardPenShop", cardPenShop);
  useEffect(() => {
    dispatch(thunkFetcheckProductShop(props.pendingShop));
  }, [dispatch]);

  return (
    <>
      {cardPenShop?.map((item) => {
        console.log("item", item);
        return (
          <div className="mb-2" key={item.id}>
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
                    <div className="flex justify-between place-items-center px-[16px] pt-[8px]">
                      <h1>ชื่อร้าน {item?.id}</h1>
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
                    {item?.OrderShop?.status === "PENDING" ? (
                      <div className="flex gap-2 justify-center ">
                        {/* <input
                          type="text"
                          // name={name}
                          placeholder="TRACKING NUMBER"
                          value=""
                          // onChange={onChange}
                          className="w-[75%] rounded-xl border px-4 py-2 mt-4 bg-blue-100 "
                        /> */}
                        <button
                          className="w-[25%] rounded-xl border px-4 py-2 mt-4 bg-red-400 text-gray-50 "
                          onClick={() =>
                            handlechangeupdatestate(
                              item?.OrderShop?.id,
                              "CANCELLED"
                            )
                          }
                        >
                          REJECT
                        </button>
                        <button
                          className="w-[25%] rounded-xl border px-4 py-2 mt-4 bg-lime-400 text-gray-50 "
                          onClick={() =>
                            handlechangeupdatestate(
                              item?.OrderShop?.id,
                              "SHIPPING"
                            )
                          }
                        >
                          SEND
                        </button>
                      </div>
                    ) : null}
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
