import React from "react";

export default function AddProduct() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-red-400 flex flex-col items-center">
        <div className="text-[25px] text-white font-bold">Product Page</div>
      </div>
      {/* <div className="flex flex-row justify-evenly m-4">
        <button className="bg-orange-400 p-2 rounded-md text-white font-bold">
          Add Product
        </button>
        <button className="bg-orange-400 p-2 rounded-md text-white font-bold">
          Edit Product
        </button>
      </div> */}
      <div className=" flex justify-center m-6 ">
        <form className="gap-4 ">
          <div className="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 my-2 border-2 rounded-lg cursor-pointer bg-gray-200 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload Photo</span>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <input
            placeholder="ชื่อสินค้า"
            className="w-full rounded-md border px-4 py-3 bg-gray-200 mx-auto text-black my-2"
          />
          <input
            placeholder="รายละเอียดสินค้า"
            className="w-full rounded-md border px-4 py-3 bg-gray-200 mx-auto text-black my-2"
          />
          <input
            placeholder="ราคา"
            className="w-full rounded-md border px-4 py-3 bg-gray-200 mx-auto text-black my-2"
          />
          <select className="select w-full max-w-md bg-gray-200 mx-auto my-2">
            <option disabled selected>
              Category
            </option>
            <option>Beauty</option>
            <option>Food</option>
            <option>Home</option>
            <option>Lifestyle</option>
            <option>Technology</option>
          </select>
        </form>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-red-400 p-2 rounded-md text-white font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
