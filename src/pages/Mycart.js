import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ItemInCart from "../components/cart/ItemInCart";
import {
  selectAllCart,
  thunkGetCart,
  thunkUpdateCart,
  unSelectAllCart,
} from "../reduxStore/CartSlice";

export default function Mycart() {
  const state = useSelector((state) => state.cart.itemInCart);
  const selectedCart = useSelector((state) => state.cart.selectedItem);
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newState = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (auth) {
      dispatch(thunkGetCart());
    } else {
      navigate("/Authenticate");
    }
  }, []);

  const cart = state.reduce((acc, el) => {
    if (acc[el.Shop?.name]) {
      acc[el.Shop?.name].push(el);
    } else {
      acc[el.Shop?.name] = [];
      acc[el.Shop?.name].push(el);
    }
    return acc;
  }, {});

  const totalPrice = Object.values(selectedCart)
    .flat()
    .reduce((acc, el) => {
      acc += +el.Product?.price * el.quantity;
      return acc;
    }, 0);

  useEffect(() => {
    newState.current = state;
  }, [state]);

  useEffect(() => {
    return () => {
      if (auth) {
        dispatch(thunkUpdateCart(newState.current));
      }
    };
  }, []);

  const handleCheckAll = () => {
    if (Object.keys(selectedCart).length !== 0) {
      dispatch(unSelectAllCart());
    } else {
      dispatch(selectAllCart(cart));
    }
  };

  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto">
      <div className="w-full h-[60px] px-4 bg-red-400 flex flex-row justify-between items-center">
        <Link to="/">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <div className="text-[25px] text-white font-bold ">My Cart</div>
        <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </div>
      {Object.keys(cart).map((el, idx) => (
        <ItemInCart key={idx} name={el} />
      ))}
      <div className="h-[50px] w-[390px] bg-white flex gap-4 border-t fixed bottom-0">
        <div className="">
          <input
            type="checkbox"
            className="checkbox ml-5 mt-2"
            onChange={handleCheckAll}
            checked={Object.keys(selectedCart).length !== 0}
          />
        </div>

        <div className="w-1/2 h-full flex flex-col items-end ">
          <div className="text-[16px]">All</div>
          <div>฿ {totalPrice || 0}</div>
        </div>
        <button
          onClick={() => {
            if (Object.values(selectedCart).length === 0) {
              toast.error("Please selete your item");
            } else {
              navigate("/checkout");
            }
          }}
          className="w-[157px] h-[49px] bg-red-500 flex items-center justify-center text-white font-bold"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
