import { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCart } from "../reduxStore/CartSlice";
export default function CartIcon() {
  const state = useSelector((state) => state.cart.itemInCart);
  const user = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(thunkGetCart());
    }
  }, []);
  return (
    <div className="relative">
      <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      {state?.length === 0 ? (
        ""
      ) : (
        <div className="w-[12px] h-[12px] text-[10px] text-white rounded-full absolute top-0 right-0 bg-red-500 flex items-center justify-center">
          {state?.length}
        </div>
      )}
    </div>
  );
}
