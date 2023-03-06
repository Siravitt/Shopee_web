import { Outlet } from "react-router-dom";
// import BottomNavbar from "./BottomNavbar";
// import BottomNavbarForShop from "./BottomNavbarForShop";

export default function NormalLayout() {
  return (
    <div className="w-[390px] h-[845px] bg-white mx-auto">
      <Outlet />
    </div>
  );
}
