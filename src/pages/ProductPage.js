import HeaderSearch from "../components/header/HeaderSearch.js";
import Footer from "../components/Footer.js";
import Review from "../components/Review.js";
import PriceProduct from "../components/PriceProduct.js";
import SmallLine from "../components/SmallLine.js";
import BigLine from "../components/BigLine.js";

import movie from "../images/movie.png";
import logomovie from "../images/logomovie.png";

export default function ProductPage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />
        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++ image movie +++++++++++++++++++++++++++++ */}
        <div className="w-[377px] h-[355px] rounded-full flex items-center justify-center mt-[70px]">
          <img src={movie} alt="" />
        </div>

        {/* +++++++++++++++++++++++++++++ END movie +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ detail name price amount +++++++++++++++++++++++++++++ */}

        <PriceProduct />

        {/* +++++++++++++++++++++++++++++ END detail name price amount +++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ logoProduct shop +++++++++++++++++++++++++++++ */}

        <div className="h-[126px] w-[390px] flex justify-between items-center px-2 ">
          <div className="h-[86px] w-[66px]">
            <img src={logomovie} alt="" />
          </div>
          <div>
            <div className=" my-4">
              <h1>Major</h1>
            </div>
            <div className=" flex justify-between">
              <div className=" text-orange-400 ">
                <p>123</p>
              </div>
              <div className=" pl-2">
                <p>รายการสินค้า</p>
              </div>
            </div>
          </div>
          <div className="h-[39px] w-[80px] text-orange-400 border-2 border-orange-400 flex justify-center items-center mr-[17px]">
            <h1>ดูร้านค้า</h1>
          </div>
        </div>
        {/* +++++++++++++++++++++++++++++ END logoProduct shop +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ detail product +++++++++++++++++++++++++++++ */}
        <div>
          <h1 className="px-4 py-2">คุณลักษณะ</h1>
          {/* +++++++++++++++++++++++++++++ line small+++++++++++++++++++++++++++++ */}
          <SmallLine />
          {/* +++++++++++++++++++++++++++++ END line small+++++++++++++++++++++++++++++ */}
          <div className="px-4 py-2">
            <h1>รายละเอียด</h1>

            <p>
              ***หากสินค้ามีปัญหา ติดต่อทางร้านก่อนนะคะ <br />
              ***หากพึงพอใจในสินค้าให้ 5 ดาวทีนะคะ <br />
              เพื่อเป็นกำลังใจให้กับทางร้านค้า *** <br />
              ***รับประกันสินค้าภายใน 7 วัน กรณีสินค้าเกิดความเสียหาย <br />
              ไม่สามารถใช้งานได้ <br />
              รบกวนถ่ายวิดีโอก่อนแกะสินค้าทุกครั้งนะคะ***
            </p>
          </div>
          {/* +++++++++++++++++++++++++++++ line small+++++++++++++++++++++++++++++ */}
          <SmallLine />
          {/* +++++++++++++++++++++++++++++ END line small+++++++++++++++++++++++++++++ */}
        </div>
        <div className="flex justify-center py-2 text-orange-400">
          <p> เพิ่มเติม </p>
        </div>

        {/* +++++++++++++++++++++++++++++ END detail product +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ review product +++++++++++++++++++++++++++++ */}

        <div>
          <h1 className="px-4 py-2">รีวิวสินค้า</h1>
          {/* +++++++++++++++++++++++++++++ line small+++++++++++++++++++++++++++++ */}
          <SmallLine />
          {/* +++++++++++++++++++++++++++++ END line small+++++++++++++++++++++++++++++ */}

          <Review />
        </div>

        {/* +++++++++++++++++++++++++++++ End review product +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ review product +++++++++++++++++++++++++++++ */}

        <div>
          {/* +++++++++++++++++++++++++++++ line small+++++++++++++++++++++++++++++ */}
          <SmallLine />
          {/* +++++++++++++++++++++++++++++ END line small+++++++++++++++++++++++++++++ */}
          <Review />
        </div>

        {/* +++++++++++++++++++++++++++++ End review product +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ footer +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ END footer +++++++++++++++++++++++++++++ */}

        {/* before end */}
      </div>
    </>
  );
}
