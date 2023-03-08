import { useDispatch, useSelector } from "react-redux";
import { selectShop, unSelectShop } from "../../reduxStore/CartSlice";
import BigLine from "../BigLine";
import Cart from "../Cart";

export default function ItemInCart({ name }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.itemInCart);
  const selectedCart = useSelector((state) => state.cart.selectedItem);
  const product = cart.filter((el) => el.Shop?.name === name);
  const isCheck = Object.keys(selectedCart).includes(name);
  
  const checkShop = (e) => {
    if (e.target.checked) {
      dispatch(selectShop({ [name]: product }));
    } else {
      dispatch(unSelectShop(name));
    }
  };
  return (
    <>
      <div className="mx-4 my-4 flex items-center gap-4">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={(e) => checkShop(e)}
        />
        <div className="text-[25px] text-black font-bold">{name}</div>
      </div>
      {product.map((el) => (
        <Cart
          key={el.id}
          image={el.image.image}
          productId={el.productId}
          shopName={el.Shop.name}
          name={el.Product.name}
          des={el.Product.description}
          price={el.Product.price}
          quantity={el.quantity}
          product={el}
        />
      ))}
      <div className=" mt-10">
        <BigLine />
      </div>
    </>
  );
}
