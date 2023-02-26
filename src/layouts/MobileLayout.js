import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

export default function MobileLayout() {
  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto">
      <Outlet />
      <BottomNavbar />
    </div>
  );
}
