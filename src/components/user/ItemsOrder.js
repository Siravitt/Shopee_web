export default function ItemsOrder({ name, des, quantity, price, image }) {
  return (
    <div className="mx-4 mb-4 flex items-center gap-4">
      <img
        className="w-[125px] h-[100px] object-cover bg-gray-400"
        src={image}
        alt="product"
      />
      <div className="flex flex-col gap-1">
        <div className="text-[14px] text-black font-bold">{name}</div>
        <div className="text-[12px] text-black font-light ">{des}</div>
        <div className="text-[12px] text-black font-light ">
          {quantity} {quantity > 1 ? "pieces" : "piece"}
        </div>
        <div className="text-[12px] text-black font-light ">
          Price: ฿ {price}
        </div>
        <div className="text-[12px] text-red font-light text-red-500">
          Total price ฿ {quantity * price}
        </div>
      </div>
    </div>
  );
}
