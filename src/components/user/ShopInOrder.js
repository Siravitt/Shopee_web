import { useSelector } from "react-redux";
import ItemsOrder from "./ItemsOrder";

export default function ShopInOrder({ name }) {
  const selectedCart = useSelector((state) => state.cart.itemInCart);
  const product = selectedCart.filter((el) => el.Shop?.name === name);
  return (
    <>
      <div className="mx-4 my-4 flex items-center gap-4">
        <div className="text-[20px] text-black font-bold">{name}</div>
      </div>
      {product.map((el) => (
        <ItemsOrder
          key={el.id}
          name={el.Product.name}
          des={el.Product.description}
          quantity={el.quantity}
          price={el.Product.price}
          image={el.image.image}
        />
      ))}
    </>
  );
}
