import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import creditCard from "../images/card-removebg.png";
import cardLogo from "../images/CardLogo.png";
export default function Payment() {
  return (
    <>
      <div className="w-[390px] min-h-[845px]  mx-auto border bg-red-300 ">
        <div className="w-full flex flex-row h-[70px] px-4 items-center justify-between bg-red-400">
          <Link to="/checkout">
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
          <h4 className="text-2xl text-white font-bold ">Payment</h4>
          <Link to="/my-cart">
            <ShoppingCartIcon sx={{ color: "white", fontSize: 25 }} />
          </Link>
        </div>
        <form
          //   onSubmit={handleClickEdit}
          className="gap-4 p-4 bg-white mt-4 rounded-xl mx-4 "
        >
          <p className="p-4 flex justify-center text-xl font-medium text-red-400">
            ENTER CARD DETAILS
          </p>

          <div className="border border-red-600 px-2 py-4 rounded-xl">
            <div className="flex justify-center items-center mx-8">
              <img src={creditCard} alt="" />
            </div>
            <img src={cardLogo} alt="" />
            <div className="relative">
              <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                Name on card
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ex. John Doe"
                // value={input.userName}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-6 rounded-md py-4 pl-4 block w-full sm:text-sm"
              />
            </div>

            <div className="relative">
              <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 1234 1234 1234"
                // value={input.userName}
                // onChange={handleChangeInput}
                className=" border border-red-400 bg-white my-6 rounded-md py-4 pl-4 block w-full sm:text-sm"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <label className=" bg-white text-red-400 px-2 absolute -top-2 left-2 ">
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="MM/YY"
                  // value={input.expirationDate}
                  // onChange={handleChangeInput}
                  className=" border border-red-400 bg-white my-2 rounded-md py-3 pl-4 block w-full sm:text-sm"
                />
              </div>

              <div className="relative">
                <label className="bg-white text-red-400 px-2 absolute -top-2 left-2">
                  Security Code
                </label>
                <input
                  type="password"
                  name="securityCode"
                  placeholder="XXX"
                  className="border border-red-400 bg-white my-2 rounded-md py-3 pl-4 block w-full sm:text-sm "
                  // value={input.securityCode}
                  // onChange={handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center py-4 ">
            <button className="w-full bg-red-400 py-2 rounded-xl text-white font-bold text-2xl hover:bg-red-700 duration-200 cursor-pointe2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
