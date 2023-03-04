import { Link } from "react-router-dom";

import HeaderSearch from "../components/header/HeaderSearch.js";
// import Footer from "../components/Footer.js";
import Review from "../components/Review.js";
import PriceProduct from "../components/PriceProduct.js";
import SmallLine from "../components/SmallLine.js";
import { useEffect } from "react";
import BigLine from "../components/BigLine.js";
import { useDispatch, useSelector } from "react-redux";

import movie from "../images/movie.png";
// import logomovie from "../images/logomovie.png";
import ImageSlider from "../components/imgProduct/ImageSlider.js";
import { thunkFetchGetProduct } from "../reduxStore/ProductSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { formatNumber } from "../reduxStore/formatNumber";
// import { useDispatch } from "react-redux";

export default function ProductPage() {
  let { productId } = useParams();

  const dispatch = useDispatch();
  const state = useSelector(state => state.allProduct.product);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(thunkFetchGetProduct(productId));
  }, [dispatch]);

  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto border  overflow-y-scroll ">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />
        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++ image movie +++++++++++++++++++++++++++++ */}
        <div className="w-[377=px] h-[355px] rounded-full flex items-center justify-center ">
          <ImageSlider ProductId={productId} />
        </div>

        {/* +++++++++++++++++++++++++++++ END movie +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ detail name price amount +++++++++++++++++++++++++++++ */}

        <PriceProduct
          name={state.name}
          price={formatNumber(Number(state.price))}
        />

        {/* +++++++++++++++++++++++++++++ END detail name price amount +++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ logoProduct shop +++++++++++++++++++++++++++++ */}

        <div className="h-[126px] w-[390px] flex justify-between items-center px-2 ">
          <div className="h-[86px] w-[66px] pl-[6px] pt-[16px]">
            <img
              className="rounded-full"
              src={state?.Shop?.profileImage}
              alt=""
            />
          </div>
          <div>
            <div className=" my-4">
              <h1 className="text-[18px] font-semibold">{state?.Shop?.name}</h1>
            </div>
            <div className=" flex justify-between pr-[24px]">
              <div className=" text-orange-400 ">
                <p>{formatNumber(1000)}</p>
              </div>
              <div className=" pl-2">
                <p>รายการสินค้า</p>
              </div>
            </div>
          </div>
          <div className="h-[39px] w-[80px] text-orange-400 border-2 border-orange-400 flex justify-center items-center mr-[17px]">
            <Link to={`/shopProducts/${state.shopId}`}>
              <button>ดูร้านค้า</button>
            </Link>
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

            <p>{state.description}</p>
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
        <div className="h-[50px] w-[390px] bg-white justify-between flex  border-t fixed bottom-0 z-50 bottom-0 ">
          <div className="w-full h-full  items-center bg-green-300 flex justify-center ">
            <ChatOutlinedIcon className="w-auto h-auto relative text-black pr-[5px]" />
            <p className="text-[20px] text-black flex justify-center">
              CHAT NOW
            </p>
          </div>

          <button className="w-[100%] h-full bg-red-500 flex  items-center justify-center text-white font-bold">
            Add to Cart
          </button>
        </div>
        {/* +++++++++++++++++++++++++++++ END footer +++++++++++++++++++++++++++++ */}
        <div className="h-[50px] w-[390px] bg-white justify-between flex  border-t bottom-0 "></div>
        {/* before end */}
      </div>
    </>
  );
}
