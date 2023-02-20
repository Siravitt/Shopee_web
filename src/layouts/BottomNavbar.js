import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

export default function BottomNavbar() {
  return (
    <>
      <div className="w-[390px] h-[70px] px-8 bg-orange-400 flex items-center justify-between  bottom-0 fixed">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          {/* <HomeIcon sx={{ color: "orange", fontSize: 40 }}/> */}
          <HomeOutlinedIcon sx={{ color: "white", fontSize: 50 }} />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <MessageOutlinedIcon sx={{ color: "white", fontSize: 40 }} />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <NotificationsActiveOutlinedIcon
            sx={{ color: "white", fontSize: 45 }}
          />
        </div>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
          <AccountBoxOutlinedIcon sx={{ color: "white", fontSize: 45 }} />
        </div>
      </div>
    </>
  );
}
