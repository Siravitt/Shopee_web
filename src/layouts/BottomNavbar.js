import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function BottomNavbar() {
  return (
    <>
      <div className="w-[390px] h-[70px] px-8 bg-orange-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <HomeIcon sx={{ color: "orange", fontSize: 40 }}/> */}
          <Link to="/Home">
            <HomeOutlinedIcon sx={{ color: "white", fontSize: 50 }} />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/chat">
            <MessageOutlinedIcon sx={{ color: "white", fontSize: 40 }} />
          </Link>
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <NotificationsActiveOutlinedIcon
            sx={{ color: "white", fontSize: 45 }}
          /> */}

          <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 45 }} />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <Link to="/myorderpage">
            <AccountBoxOutlinedIcon sx={{ color: "white", fontSize: 45 }} />
          </Link>
        </div>
      </div>
    </>
  );
}
