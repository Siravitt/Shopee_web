import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thunkGetProductByShop } from "../../reduxStore/ProductSlice";

export default function ProductCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct.productFilterShop);
  useEffect(() => {
    dispatch(thunkGetProductByShop());
  }, []);
  return (
    <>
      {products.map((el) => (
        <div key={el.id} className="">
          <Link to={`/product/`}>
            <div className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow">
              <img className="p-auto rounded-t-lg" src={el.ProductImages[0]?.image} alt="" />

              <div className="px-3 pb-1">
                <h5 className="text-[16px] font-bold tracking-tight text-black flex justify-left pl-0 pt-2">
                  {el.name}
                </h5>

                <div className="flex justify-between">
                  <span className="text-[14px] mt-[8px] text-black">฿ {el.price}</span>
                  <div className="text-black rounded-lg text-[12px] mt-[16px] text-center">
                    ขายแล้ว {el.totalSale} ชิ้น
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
