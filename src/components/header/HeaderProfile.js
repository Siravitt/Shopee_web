import { Link, useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import profile2 from "../../images/profile2.png";
import Red from "../../images/Red.png";
import { removeAccessToken } from "../../utils/local-storage";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const refresh = () => window.location.reload(true);

export default function HeaderProfile() {
  const navigate = useNavigate();
  const logOut = () => {
    removeAccessToken();
    navigate("/");
    // refresh();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto ">
        <div className="h-20 w-full rounded-lg shadow-md bg-cover bg-center bg-blend-multiply">
          <img src={Red} alt="" />
        </div>

        <div className="-mt-16 ">
          <div className="ml-52 -mr-28 " onClick={logOut}>
            <button>
              <ExitToAppIcon sx={{ fontSize: 30, color: "white" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-2">
        <img src={profile2} alt="" />
      </div>
      <div className="py-2 text-center font-bold uppercase tracking-wide text-white">
        Username
      </div>
      <div className="flex items-center justify-center flex-col">
        <Link to="/UserEditProfile">
          <button className=" bg-red-400 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
            Edit profile
          </button>
        </Link>

        <div className="mt-1">
          <Link to="/shop-register">
            <button className=" bg-red-700 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              <LocalMallIcon sx={{ color: "white" }} />
              Go to shop
            </button>
          </Link>
          <div />
        </div>
      </div>
    </>
  );
}
