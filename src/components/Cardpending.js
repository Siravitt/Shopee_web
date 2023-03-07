import {
  thunkFetcheckProductUser,
  thunkFetcheckOderShoptUser,
} from "../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateOderShopForUser } from "../apis/checkout-user-api";

export default function Cardpending(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechangeupdatestateUser = (orderShopId) => {
    updateOderShopForUser(orderShopId);
    navigate("/OrderPage");
  };

  const cardPenUser = useSelector(
    (state) => state?.allProduct?.checkoutUser?.order
  );
  const cardUserordershop = useSelector(
    (state) => state?.allProduct?.orderShopUser
  );
  // console.log("first", cardUserordershop);

  useEffect(() => {
    dispatch(thunkFetcheckProductUser(props.pending));
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkFetcheckOderShoptUser(props.pending));
  }, [dispatch]);

  let orderShopCard = [];
  for (const property in cardUserordershop) {
    orderShopCard.push(cardUserordershop[property]);
  }

  // const merge3 = orderShopCard.flat();
  console.log("last", orderShopCard);

  return (
    <>
      {orderShopCard?.map((item) => {
        // console.log("item", cardUserordershop);
        // console.log("item2", cardUserordershop);
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
                    <div className="flex justify-around  px-[16px] pt-[8px]">
                      <h1>ชื่อร้าน</h1>
                      <h1>{item?.Order?.status}</h1>
                      <h1></h1>
                      {/* <h1>{item.status}</h1> */}
                    </div>
                    <hr />
                    {item?.map((el) => {
                      return (
                        <div className="flex justify-between px-[16px] pt-[8px]">
                          <div>{el?.Product?.name}</div>
                          <div>X {el?.quantity}</div>
                        </div>
                      );
                    })}
                    {/* total */}
                    <h1>total : {}</h1>
                    {item?.status === "SHIPPING" ? (
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
                          // onClick={() =>
                          //   handlechangeupdatestate(item?.id, "CANCELLED")
                          // }
                        >
                          REJECT
                        </button>
                        <button
                          className="w-[25%] rounded-xl border px-4 py-2 mt-4 bg-lime-400 text-gray-50 "
                          onClick={() => handlechangeupdatestateUser(item?.id)}
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
