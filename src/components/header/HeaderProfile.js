import { Link, useNavigate } from "react-router-dom";

import profile2 from "../../images/profile2.png";
import { removeAccessToken } from "../../utils/local-storage";
const refresh = () => window.location.reload(true);

export default function HeaderProfile() {
  const navigate = useNavigate();
  const logOut = () => {
    removeAccessToken();
    navigate("/");
    refresh();
  };

  return (
    <>
      <div className="w-[390px] min-h-[188px] bg-orange-400  flex  items-center ">
        <div className="w-[89px] min-h-[105px] mx-[28px]">
          <img src={profile2} alt="" />
        </div>

        <div className="">
          <div className="text-white text-[20px]">
            <h1>Username</h1>
          </div>

          <div className="h-[24px] w-[82px] text-orange-400 bg-gray-200 flex justify-center items-center  text-[12px] my-1">
            <Link to="/UserEditProfile">
              <button>Edit Profile</button>
            </Link>
          </div>

          <div
            className="h-[24px] w-[82px] mt-4 text-orange-400 bg-red-200 flex justify-center items-center  text-[12px] my-1"
            onClick={logOut}
          >
            <button>log out</button>
          </div>
        </div>
      </div>
    </>
  );
}
