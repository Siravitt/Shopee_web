import ImageData from "./ImageData";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  console.log(length);

  const prevSlide = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent(current - 1);
  };
  const nextSlide = () => {
    current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  // 0 1 2
  // 0
  return (
    <section className="slider">
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <div
                  className=" w-[200px] h-[388px] absolute opacity-50"
                  onClick={prevSlide}
                ></div>
                <img
                  src={data.image}
                  alt={data.title}
                  className="image"
                  onClick={nextSlide}
                />
                <p className="flex justify-center">
                  {index + 1}/{ImageData.length}
                </p>
              </div>
            )}
          </div>
        );
      })}
      {/* <div className="flex justify-center  z-100 top-[-100] ">
        <ArrowBackIosIcon className="text-red-500" onClick={prevSlide} />
        <ArrowForwardIosIcon className="text-red-500" onClick={nextSlide} />
      </div> */}
    </section>
  );
};

export default ImageSlider;
