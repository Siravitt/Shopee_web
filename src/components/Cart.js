export default function Cart() {
  return (
    <>
      <div className="mx-4 flex items-center gap-4">
        <input type="checkbox" className="default:bg-orange-400" />
        <img
          className="w-[125px] h-[100px] object-cover"
          src="https://res.cloudinary.com/dyhm0zdxq/image/upload/v1676367101/food/download_p8ydoo.jpg"
          alt="product"
        />
        <div className="flex flex-col gap-1">
          <div className="text-[15px] text-black font-bold">Product Name</div>
          <div className="text-[15px] text-black font-light ">
            Product Description
          </div>
          <div className="text-[15px] text-orange font-light text-orange-500	">
            Price
          </div>
          <div>
            <div className="flex">
              <button className="w-[25px] h-[25px] border-y border-l flex items-center justify-center pb-1 hover:bg-gray-200">
                -
              </button>
              <button className="w-[25px] h-[25px] border flex items-center justify-center">
                1
              </button>
              <button className="w-[25px] h-[25px] border-y border-r flex items-center justify-center pb-1 hover:bg-gray-200">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
