import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function BottomNavbar() {
  // const auth = useSelector(state => state.auth.auth);
  return (
    <>
      <div className="w-[390px] h-[50px] px-8 bg-red-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <HomeIcon sx={{ color: "orange", fontSize: 40 }}/> */}

          <Link to="/">
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
          <Link to="/MyOrderPage">
            <AccountBoxOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
          </Link>
        </div>
      </div>
    </>
  );
}
