import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function BottomNavbarForShop() {
  return (
    <>
      <div className="w-[390px] h-[60px] px-8 bg-blue-400 flex items-center justify-evenly gap-10 bottom-0 fixed">
        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <Link to="/shop-home">
            <HomeIcon sx={{color: "white", fontSize: 40}}/>
          </Link>
        </div>
        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <Link to="/ChatPageForShop">
            <ChatIcon sx={{color: "white", fontSize: 35}}/>
          </Link>
        </div>
        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <Link to="/shop-profile">
            <AccountCircleIcon sx={{color: "white", fontSize: 40}}/>
          </Link>
        </div>
      </div>
    </>
  );
}
