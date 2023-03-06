import movie from "../images/movie.png";
import star from "../images/star.png";

export default function Review() {
  return (
    <>
      <div className="flex px-4 py-2 w-full h-[110px]">
        <div className="w-[37px] h-[35px] mr-4">
          <img src={movie} alt="" />
        </div>
        <div>
          <div className="">
            <h1>username</h1>
          </div>
          <div className="flex  ">
            <img src={star} alt="" />
            <h1>5</h1>
          </div>
          <h1>สินค้าดีมีคุณภาพ</h1>
        </div>
      </div>
    </>
  );
}
