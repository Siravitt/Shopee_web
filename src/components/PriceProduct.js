import star from "../images/star.png";

export default function PriceProduct({name, price, totalSale}) {
  return (
    <>
      <div className="w-[377px] h-[109px] px-4 ">
        <h1 className="py-2 font-bold">{name}</h1>
        <h1 className="text-[14px]">฿ {price}</h1>
        <div className="flex  justify-between py-2">
          <div className="flex items-center gap-1">
            <img src={star} alt="" className="w-[15px] h-[15px]"/>
            <div className="text-[12px]">5</div>
          </div>
          <div>
            <div className="text-[14px]">ขายแล้ว {totalSale || 0} ชิ้น</div>
          </div>
        </div>
      </div>
    </>
  );
}
