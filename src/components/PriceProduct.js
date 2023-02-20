import star from "../images/star.png";

export default function PriceProduct() {
  return (
    <>
      <div className="w-[377px] h-[109px] px-4 ">
        <h1 className="py-2 ">Mr. Bean dvd boxset</h1>
        <h1 className="">฿ 100</h1>
        <div className="flex  justify-between py-2">
          <div className="flex ">
            <img src={star} alt="" />
            <h1>5</h1>
          </div>
          <div>
            <h1>ขายแล้ว 10 ชิ้น</h1>
          </div>
        </div>
      </div>
    </>
  );
}
