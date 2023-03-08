import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import toast from "react-hot-toast";
import Review from "../components/Review.js";
import PriceProduct from "../components/PriceProduct.js";
import SmallLine from "../components/SmallLine.js";
import { useEffect } from "react";
import BigLine from "../components/BigLine.js";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../components/imgProduct/ImageSlider.js";
import { thunkFetchGetProduct } from "../reduxStore/ProductSlice.js";
import { useParams } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import CartIcon from "../components/CartIcon.js";
import { thunkAddToCart } from "../reduxStore/CartSlice.js";

// import { useDispatch } from "react-redux";

export default function ProductPage() {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.allProduct.product);
  const user = useSelector((state) => state.auth.auth);
  const cart = useSelector((state) => state.cart.itemInCart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(thunkFetchGetProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-white mx-auto overflow-y-scroll border">
        <div className="bg-gradient-to-r from-orange-400 via-Amber-200 to-red-400 w-full h-[60px] flex justify-between items-center px-4">
          <Link to={"/"}>
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
          <Link to={"/my-cart"}>
            <CartIcon />
          </Link>
        </div>
        <div className="w-full h-[355px] flex items-center justify-center my-2">
          <ImageSlider ProductId={productId} />
        </div>
        <SmallLine />
        <PriceProduct
          name={state.name}
          price={state.price}
          totalSale={state.totalSale}
        />
        <BigLine />
        {/* ++++++++++++++++ END line +++++++++++++++++++++ */}

        {/* +++++++++++++++++++ logoProduct shop ++++++++++++++++ */}

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
              <div className="font-bold  text-red-400">{state.Shop?.name}</div>
            </div>
            <div className=" flex justify-between text-[12px]">
              <div className=" text-orange-400 ">
                <p>10</p>
              </div>
              <div className=" pl-2">
                <p>รายการสินค้า</p>
              </div>
            </div>
          </div>
          <div className="p-2 text-red-300 border-2 border-red-400 flex justify-center items-center mr-[17px] hover:text-white hover:bg-red-400 duration-200">
            <Link to={`/shopProducts/` + state.Shop?.id}>
              <button className="font-bold">Visit Shop</button>
            </Link>
          </div>
        </div>
        {/* ++++++++++++++++ END logoProduct shop ++++++++++++++++++ */}

        {/* +++++++++++++++++ line +++++++++++++++++++ */}
        <BigLine />
        {/* ++++++++++++++++++++ END line ++++++++++++++++++++ */}

        {/* ++++++++++++++++ detail product ++++++++++++++++++ */}
        <div>
          {/* <h1 className="px-4 py-2">คุณลักษณะ</h1> */}
          {/* ++++++++++++++++++ line small++++++++++++++++ */}
          {/* <SmallLine /> */}
          {/* +++++++++++++++++++ END line small++++++++++++++++ */}
          <div className="px-4 py-2 text-bold">
            <h1 className="font-semibold pb-2 text-red-400">Description</h1>

            <p>{state.description}</p>
          </div>
          {/* +++++++++++++++++++++++++++++ line small+++++++++++++++++++++++++++++ */}
          <SmallLine />
          {/* +++++++++++++++++++++++++++++ END line small+++++++++++++++++++++++++++++ */}
        </div>
        <div className="flex justify-center py-2 text-red-400">
          <button>More details</button>
        </div>

        {/* +++++++++++++++++++++++++++++ END detail product +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ line +++++++++++++++++++++++++++++ */}
        <BigLine />
        {/* +++++++++++++++++++++++++++++ END line +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ review product +++++++++++++++++++++++++++++ */}

        <div>
          <h1 className="px-4 py-2 text-red-400">Review</h1>
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

        {/* +++++++++++++++++++++++++++++ END footer +++++++++++++++++++++++++++++ */}

        {/* before end */}
        <div className="w-[388px] h-[50px] bg-white fixed bottom-0 flex justify-between border-t">
          <Link
            to="/chat"
            className="w-1/2 flex items-center justify-center gap-2 font-bold text-red-400"
          >
            <ChatIcon sx={{ color: "lightred", fontSize: 20 }} />
            Chat
          </Link>
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
            className="bg-gradient-to-r from-orange-400 via-Amber-200  to-red-400 w-1/2 flex items-center justify-center text-white font-bold hover:text-white hover:bg-red-500 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
