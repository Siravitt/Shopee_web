import { Link, useLocation } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export default function OrderNavbar() {
  const location = useLocation();
  return (
    <>
      <div className="h-[100px] w-[390px] flex pr-10">
        <div className={`flex flex-col justify-center w-[150px] items-center`}>
          <Link to="/PendingPage">
            {location.pathname === "/PendingPage" ||
            location.pathname === "/shop-profile" ? (
              <AccountBalanceWalletIcon
                sx={{ color: "salmon", fontSize: 30 }}
              />
            ) : (
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: "salmon", fontSize: 30 }}
              />
            )}
          </Link>
          <h1
            className={`${
              location.pathname === "/PendingPage" ||
              location.pathname === "/MyShopPage"
                ? "font-bold"
                : ""
            }`}
          >
            Pending
          </h1>
        </div>
        <div className={`flex flex-col justify-center w-[150px] items-center`}>
          <Link to="/ShippingPage">
            {location.pathname === "/ShippingPage" ? (
              <LocalShippingIcon sx={{ color: "salmon", fontSize: 30 }} />
            ) : (
              <LocalShippingOutlinedIcon
                sx={{ color: "salmon", fontSize: 30 }}
              />
            )}
          </Link>
          <h1
            className={`${
              location.pathname === "/ShippingPage" ? "font-bold" : ""
            }`}
          >
            Shipping
          </h1>
        </div>
        <div className={`flex flex-col justify-center w-[150px] items-center`}>
          <Link to="/OrderPage">
            {location.pathname === "/OrderPage" ? (
              <CheckBoxIcon sx={{ color: "salmon", fontSize: 30 }} />
            ) : (
              <CheckBoxOutlinedIcon sx={{ color: "salmon", fontSize: 30 }} />
            )}
          </Link>
          <h1
            className={`${
              location.pathname === "/OrderPage" ? "font-bold" : ""
            }`}
          >
            Order Success
          </h1>
        </div>
      </div>
    </>
  );
}
