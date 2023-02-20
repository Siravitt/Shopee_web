export default function Cart() {
    return(
        <>
        
       
        <div className="flex space-x-6 ">
        <input type="checkbox" className="checkbox ml-5 " />
            <img
              className="w-[100px] h-[100px] ml-20 mt-5"
              src="https://res.cloudinary.com/dyhm0zdxq/image/upload/v1676367101/food/download_p8ydoo.jpg"
              alt="product"
            />
            <div>
            <div className="text-[15px] text-black font-bold mt-5">Product Name</div>
            <div className="text-[15px] text-black font-light ">Product Description</div>
            <div className="text-[15px] text-orange font-light mt-8 text-orange-500	">Price</div>
            <div>
            <div className="btn-group ">
                <button className="btn btn-active border w-[25px] h-[25px]">-</button>
                <button className="btn border  w-[25px] h-[25px]">1</button>
                 <button className="btn border  w-[25px] h-[25px]">+</button>
            </div>
            </div>
            </div>

        </div>
        </>
    )
}