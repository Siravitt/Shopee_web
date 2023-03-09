import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { Link, useLocation } from "react-router-dom";

export default function ShopOrder() {
  const location = useLocation();
  return (
    <div className="h-[100px] w-[390px] flex px-[10px]">
      <div className={`flex flex-col justify-center w-[150px] items-center`}>
        <Link to="/PendingForShop">
          {location.pathname === "/PendingForShop" ||
          location.pathname === "/shop-profile" ? (
            <AccountBalanceWalletIcon
              sx={{ color: "rgb(96,165,250)", fontSize: 30 }}
            />
          ) : (
            <AccountBalanceWalletOutlinedIcon
              sx={{ color: "rgb(96,165,250)", fontSize: 30 }}
            />
          )}
        </Link>
        <h1
          className={`${
            location.pathname === "/PendingForShop" ||
            location.pathname === "/MyShopPage"
              ? "font-bold"
              : ""
          }`}
        >
          Pending
        </h1>
      </div>
      <div className={`flex flex-col justify-center w-[150px] items-center`}>
        <Link to="/ShippingForShop">
          {location.pathname === "/ShippingForShop" ? (
            <LocalShippingIcon
              sx={{ color: "rgb(96,165,250)", fontSize: 30 }}
            />
          ) : (
            <LocalShippingOutlinedIcon
              sx={{ color: "rgb(96,165,250)", fontSize: 30 }}
            />
          )}
        </Link>
        <h1
          className={`${
            location.pathname === "/ShippingForShop" ? "font-bold" : ""
          }`}
        >
          Shipping
        </h1>
      </div>
      <div className={`flex flex-col justify-center w-[150px] items-center`}>
        <Link to="/OrderSuccessForShop">
          {location.pathname === "/OrderSuccessForShop" ? (
            <CheckBoxIcon sx={{ color: "rgb(96,165,250)", fontSize: 30 }} />
          ) : (
            <CheckBoxOutlinedIcon
              sx={{ color: "rgb(96,165,250)", fontSize: 30 }}
            />
          )}
        </Link>
        <h1
          className={`${
            location.pathname === "/OrderSuccessForShop" ? "font-bold" : ""
          }`}
        >
          Order Success
        </h1>
      </div>
    </div>
  );
}
