import React from "react";
import carousel1 from "../images/sale1.jpg";
import carousel2 from "../images/sale2.jpg";
import carousel3 from "../images/sale3.jpg";
import carousel4 from "../images/sale4.jpg";

export default function carousel() {
  return (
    //   <div className="my-2">
    <div className="carousel w-full   ">
      <div id="slide1" className="carousel-item relative w-full  pt-[70px]">
        <img src={carousel1} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-orange-200 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-200 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full pt-[70px] ">
        <img src={carousel2} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-orange-200 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-200 text-white ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full  pt-[70px] ">
        <img src={carousel3} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-orange-200 text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-orange-200 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full pt-[70px]">
        <img src={carousel4} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-orange-200 text-white">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-200 text-white  "
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
