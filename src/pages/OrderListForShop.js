// import HeaderProfile from "../components/header/HeaderProfile";
// import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
// import OrderNavbar from "../components/navbar/OrderNavbar";

export default function OrderListForShop() {
  return (
    <>
      {/* body */}
      <div className="w-[100%] h-auto pb-[16px]">
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h1>ชื่อร้าน</h1>
          <h1>อยู่ระหว่างจัดส่ง</h1>
        </div>
        <hr />
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h2>ชื่อสินค้า</h2>
          <span>x 2</span>
        </div>
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h2>ชื่อสินค้า</h2>
          <span>x 2</span>
        </div>
        {/* total */}
        <div className="flex justify-between px-[16px] pt-[8px]">
          <div></div>
          <h1>total : 20 บาท</h1>
        </div>
        <div className="flex justify-between px-[16px] pt-[8px]">
          <div></div>
          <button className="bg-red-300 w-[100px] rounded-lg text-black">
            View
          </button>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      {/* body */}
    </>
  );
}
