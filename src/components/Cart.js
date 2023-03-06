import { useDispatch, useSelector } from "react-redux";
import {
  addByOne,
  removeByOne,
  selectProduct,
  unSelectProduct,
} from "../reduxStore/CartSlice";

export default function Cart({
  name,
  des,
  price,
  quantity,
  productId,
  shopName,
  product,
  image
}) {
  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart.selectedItem);
  const products = Object.values(selectedCart);
  const items = products.flat().flat();

  const handleClick = (e) => {
    if (e.target.checked) {
      dispatch(selectProduct({ [shopName]: product }));
    } else {
      dispatch(unSelectProduct({ key: shopName, productId: productId }));
    }
  };

  return (
    <>
      <div className="mx-4 mb-4 flex items-center gap-4">
        <input
          type="checkbox"
          className="default:bg-orange-400"
          checked={
            items.filter((el) => el?.productId === productId).length !== 0
          }
          onChange={(e) => handleClick(e)}
        />
        <img
          className="w-[125px] h-[100px] object-cover"
          src={image}
          alt="product"
        />
        <div className="flex flex-col gap-1">
          <div className="text-[15px] text-black font-bold">{name}</div>
          <div className="text-[15px] text-black font-light ">{des}</div>
          <div className="text-[15px] text-red font-light text-red-500	">
            ฿ {price}
          </div>
          <div>
            <div className="flex">
              <button
                onClick={() => dispatch(removeByOne({ productId: productId, shopName: shopName }))}
                className="w-[25px] h-[25px] border-y border-l flex items-center justify-center pb-1 hover:bg-gray-200"
              >
                -
              </button>
              <button className="w-[25px] h-[25px] border flex items-center justify-center">
                {quantity}
              </button>
              <button
                onClick={() =>
                  dispatch(
                    addByOne({ productId: productId, shopName: shopName })
                  )
                }
                className="w-[25px] h-[25px] border-y border-r flex items-center justify-center pb-1 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
