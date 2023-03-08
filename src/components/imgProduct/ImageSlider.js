import { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = props => {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const res = await axios.get(
      "http://localhost:8000/image/" + props.ProductId,
    );
    setImage(res.data.image);
  };
  useEffect(() => {
    getImage();
  }, []);

  const prevSlide = () => {
    current === 0 ? setCurrent(image.length - 1) : setCurrent(current - 1);
  };
  const nextSlide = () => {
    current === image.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <section className="slider w-full">
      {image?.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={data.id + "ImgSlide"}
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
                  className="image h-[355px] w-full object-cover"
                  onClick={nextSlide}
                />
                <div className="flex justify-center text-[10px] font-bold">
                  {index + 1}/{image.length}
                </div>
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
