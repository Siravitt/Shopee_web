import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import toast from "react-hot-toast";
import Review from "../components/Review.js";
import PriceProduct from "../components/PriceProduct.js";
import SmallLine from "../components/SmallLine.js";
import { useEffect } from "react";
import BigLine from "../components/BigLine.js";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD

import movie from "../images/movie.png";
// import logomovie from "../images/logomovie.png";
import ImageSlider from "../components/imgProduct/ImageSlider.js";
import { thunkFetchGetProduct } from "../reduxStore/ProductSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { formatNumber } from "../reduxStore/formatNumber";
=======
import ImageSlider from "../components/imgProduct/ImageSlider.js";
import { thunkFetchGetProduct } from "../reduxStore/ProductSlice.js";
import { useParams } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import CartIcon from "../components/CartIcon.js";
import { thunkAddToCart } from "../reduxStore/CartSlice.js";

>>>>>>> omise
// import { useDispatch } from "react-redux";

export default function ProductPage() {
  let { productId } = useParams();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const state = useSelector((state) => state.allProduct.product);
=======
  const navigate = useNavigate();

  const state = useSelector((state) => state.allProduct.product);
  const user = useSelector((state) => state.auth.auth);
  const cart = useSelector((state) => state.cart.itemInCart);

>>>>>>> omise
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(thunkFetchGetProduct(productId));
<<<<<<< HEAD
  }, [dispatch]);
=======
  }, [dispatch, productId]);
>>>>>>> omise

  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto overflow-y-scroll border">
        <div className="bg-red-300 w-full h-[60px] flex justify-between items-center px-4">
          <Link to={"/"}>
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
          <Link to={"/my-cart"}>
            <CartIcon />
          </Link>
        </div>
        <div className="w-full h-[355px] rounded-full flex items-center justify-center my-2">
          <ImageSlider ProductId={productId} />
        </div>
<<<<<<< HEAD

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
=======
        <SmallLine />
        <PriceProduct
          name={state.name}
          price={state.price}
          totalSale={state.totalSale}
        />
>>>>>>> omise
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ logoProduct shop +++++++++++++++++++++++++++++ */}

<<<<<<< HEAD
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
=======
        <div className="h-[126px] w-full flex justify-between items-center px-6">
          <div className="h-[70px] w-[70px] rounded-full bg-gray-400">
            <img
              src={state.Shop?.profileImage}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="my-2">
              <div className="font-bold">{state.Shop?.name}</div>
            </div>
            <div className=" flex justify-between text-[12px]">
              <div className=" text-orange-400 ">
                <p>10</p>
>>>>>>> omise
              </div>
              <div className=" pl-2">
                <p>รายการสินค้า</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="h-[39px] w-[80px] text-orange-400 border-2 border-orange-400 flex justify-center items-center mr-[17px]">
            <Link to={`/shopProducts/${state.shopId}`}>
=======
          <div className="h-[39px] w-[80px] text-orange-400 border-2 border-orange-400 flex justify-center items-center mr-[17px] hover:text-white hover:bg-orange-400 duration-200">
            <Link to={`/shopProducts/` + state.Shop?.id}>
>>>>>>> omise
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
          <button>เพิ่มเติม</button>
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

        <div className="pb-[60px]">
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
        <div className="w-[388px] h-[50px] bg-white fixed bottom-0 flex justify-between border-t">
          <button className="w-1/2 flex items-center justify-center gap-2 font-bold">
            <ChatIcon sx={{ color: "black", fontSize: 20 }} />
            Chat
          </button>
          <button
            onClick={() => {
              const isExist = cart.findIndex(
                (el) => +el.productId === +state.id
              );
              if (!user) {
                toast("Please login first");
                return navigate("/Authenticate");
              }
              if (isExist !== -1) {
                toast("This product is already add to your cart");
              } else {
                dispatch(
                  thunkAddToCart({
                    quantity: "1",
                    productId: state.id,
                    shopId: state.Shop?.id,
                    userId: user.id,
                  })
                );
                toast.success("Add to cart success");
              }
            }}
            className="bg-red-300 w-1/2 flex items-center justify-center text-white font-bold"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
