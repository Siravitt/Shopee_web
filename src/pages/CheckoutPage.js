import { useState, useEffect } from "react";
import Script from "react-load-script";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { getAllAddress } from "../apis/address-user-api";
import SelectAddress from "../components/user/SelectAddress";
import ShopInOrder from "../components/user/ShopInOrder";
import { createCharge } from "../apis/checkout-user-api";
import { clearSelectCart, thunkCheckoutCart } from "../reduxStore/CartSlice";

let OmiseCard;

export default function CheckoutPage() {
  const [showAddress, setShowAddress] = useState(false);
  const [selectAddress, setSelectAddress] = useState({});
  const [allAddress, setAllAddress] = useState([]);  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedCart = useSelector((state) => state.cart.selectedItem);
  const auth = useSelector((state) => state.auth.auth);

  const selectProductId = Object.values(selectedCart)
    .flat()
    .reduce((acc, el) => {
      acc.push(el.productId);
      return acc;
    }, []);

  const totalPrice = Object.values(selectedCart)
    .flat()
    .reduce((acc, el) => {
      acc += +el.Product?.price * el.quantity;
      return acc;
    }, 0);

  useEffect(() => {
    const fetchAddress = async () => {
      const res = await getAllAddress();
      setAllAddress(res.data.addresses);
      setSelectAddress(res.data.addresses?.[0]);
    };
    fetchAddress();
  }, []);

  const handleOnChange = (e) => {
    setSelectAddress(JSON.parse(e.target.value));
  };

  const closeAddress = () => setShowAddress(false)

  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
    });
  };

  const promptpayConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
    });
    OmiseCard.configureButton("#checkout-button");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: totalPrice * 100,
      submitFormTarget: "#checkout-form",
      onCreateTokenSuccess: (token) => {
        createCreditCharge(token);
      },
      onFormClosed: () => {},
    });
  };

  const createCreditCharge = async (token) => {
    try {
      const res = await createCharge({
        email: auth.email,
        name: auth.firstName + " " + auth.lastName + " " + `(id: ${auth.id}})`,
        amount: totalPrice * 100,
        token: token,
      });
      const resData = res.data;
      if (resData.status === "successful") {
        dispatch(clearSelectCart());
        dispatch(
          thunkCheckoutCart({
            productId: selectProductId,
            addressId: selectAddress.id,
          })
        );
        navigate("/PendingPage");
      } else {
        navigate("/my-cart");
      }
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    promptpayConfigure();
    omiseCardHandler();
  };

  return (
    <>
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleScriptLoad} />
      <div className="w-[390px] min-h-[845px] mx-auto bg-white">
        <div className="w-full h-[60px] bg-red-400 flex items-center justify-center relative">
          <button className="absolute top-4 left-4">
            <Link to="/my-cart">
              <ArrowBackIosIcon sx={{ fontSize: 25, color: "white" }} />
            </Link>
          </button>
          <div className="text-white text-[20px] font-bold">Checkout</div>
        </div>
        {showAddress ? (
          <>
            {allAddress.map((el) => (
              <SelectAddress
                key={el.id}
                value={el}
                handleOnChange={handleOnChange}
                selected={selectAddress.id}
                closeAddress={closeAddress}
              />
            ))}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 pt-4"
            >
              <AddIcon />
              Create new address
            </Link>
          </>
        ) : Object.keys(selectAddress).length === 0 ? (
          <Link to="/" className="flex items-center justify-center gap-2 pt-4">
            <AddIcon />
            Create new address
          </Link>
        ) : (
          <button
            onClick={() => setShowAddress(true)}
            className="w-full h-[auto] px-4 py-4 flex gap-8"
          >
            <LocationOnIcon sx={{ color: "red", fontSize: 40 }} />
            <div className="text-start flex flex-col gap-1">
              <div className="text-[18px]">Delivery Address</div>
              <div className="text-[12px]">
                {selectAddress.receiverName} | {selectAddress.receiverPhone}
              </div>
              <div className="text-[12px]">
                {selectAddress.address +
                  ", " +
                  selectAddress.subDistrict +
                  ", " +
                  selectAddress.district +
                  ", " +
                  selectAddress.province +
                  ", " +
                  selectAddress.postalCode}
              </div>
            </div>
          </button>
        )}
        <hr className="bg-gray-300 my-4" />
        {Object.keys(selectedCart).map((el, idx) => (
          <ShopInOrder name={el} key={idx} />
        ))}

        <div className="w-[390px] h-[40px] bg-white py-2 px-4 flex justify-between fixed bottom-[120px] border-t">
          <div className="text-[14px] font-bold">Payment type</div>
          <div className="text-[14px]">Credit/Debit Card</div>
        </div>
        <div className="w-[390px] h-[70px] bg-white py-2 px-4 flex justify-between fixed bottom-[50px] border-t">
          <div className="text-[14px] font-bold">Order Total (Items)</div>
          <div className="text-[14px] text-red-500 font-bold">
            ฿ {totalPrice}
          </div>
        </div>
        <div className="h-[50px] w-[390px] bg-white flex gap-4 border-t fixed bottom-0">
          <div className="w-1/2 h-full flex flex-col items-end">
            <div className="text-[14px]">Total payment</div>
            <div className="text-[14px] text-red-500 font-bold">
              ฿ {totalPrice}
            </div>
          </div>
          <form className="w-1/2 h-full">
            <button
              id="checkout-button"
              type="submit"
              onClick={handleCheckout}
              className="w-full h-full bg-red-500 flex items-center justify-center text-white font-bold"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
