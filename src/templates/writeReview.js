import React from "react";

export default function writeReview() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-orange-400 flex flex-col items-center">
        <div className="text-[25px] text-white font-bold">Write Review</div>
      </div>
      <div>
        <h1 className="w-full text-black text-2xl mx-6 my-8 font-bold">
          Write Review
        </h1>
        <div className="rating flex justify-center">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <form className="gap-4 felx flex-col my-12 ">
          <textarea
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full flex justify-center max-w-xs bg-orange-200 mx-auto h-[140px] p-4 text-black"
          />
          <div className="flex flex-row justify-end my-12">
            <button
              type="submit"
              className="bg-gray-400 p-2 rounded-md text-white font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-400 p-2 rounded-md text-white font-bold mx-8"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
