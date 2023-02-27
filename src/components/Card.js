export default function Card() {
  return (
    <>
      <div className="">
        <div
          className="w-auto h-auto bg-white border border-gray-200 rounded-lg shadow bg-white border-gray-700s "

          // key={}
          // onClick={() => {

          // }}
        >
          <div className=" ">
            <img
              className="p-auto rounded-t-lg  "
              src="https://res.cloudinary.com/dyhm0zdxq/image/upload/v1676367101/food/download_p8ydoo.jpg"
              alt="product"
            />
          </div>

          <div className="px-3 pb-1">
            <h5 className="text-xl tracking-tight text-gray-900 flex justify-left pl-0 pt-2">
              ชื่อสินค้า
            </h5>

            <div className="flex justify-between">
              <span className="text-[20px] mt-[8px] text-gray-900  text-red">
                100
              </span>
              <div className="text-black  font-medium rounded-lg text-sm mt-[16px]   text-center  ">
                ขายแล้ว 0 ชิ้น
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
