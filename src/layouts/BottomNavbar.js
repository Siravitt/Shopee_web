import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { getAccessToken } from "../../src/utils/local-storage";

export default function BottomNavbar() {
  const auth = useSelector(state => state.auth.auth);
  return (
    <>
      <div className="w-[390px] h-[50px] px-8 bg-orange-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <HomeIcon sx={{ color: "orange", fontSize: 40 }}/> */}

          <Link to="/home">
            <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/chat">
            <MessageOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <NotificationsActiveOutlinedIcon
            sx={{ color: "white", fontSize: 45 }}
          /> */}
          <Link to="/my-cart ">
            <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {getAccessToken() ? (
            <Link to="/MyOrderPage">
              <AccountBoxOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
            </Link>
          ) : (
            <Link to="/Authenticate">
              <AccountBoxOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
