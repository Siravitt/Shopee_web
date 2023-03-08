// import HeaderProfile from "../components/header/HeaderProfile";
// import HeaderProfileForShop from "../components/header/HeaderProfileForShop";
// import OrderNavbar from "../components/navbar/OrderNavbar";

export default function OrderListForShop() {
  return (
    <>
      {/* body */}
      <div className="w-[100%] h-auto pb-[16px]">
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h1>Status :</h1>
          <h1>Pending</h1>
        </div>
        <hr />
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h2>Product name</h2>
          <span>x 2</span>
        </div>
        <div className="flex justify-between px-[16px] pt-[8px]">
          <h2>Product name</h2>
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
