import profile2 from "../../images/profile2.png";

export default function HeaderProfileForShop() {
  return (
    <>
      <div className="w-[389px]  min-h-[188px] bg-red-400  flex  items-center ">
        <div className="w-[89px] min-h-[105px] mx-[28px] ">
          <img src={profile2} alt="" />
        </div>

        <div className="">
          <div className="text-white text-[20px]">
            <h1>Username</h1>
          </div>
          <div className="h-[24px] w-[82px] text-orange-400 bg-gray-200 flex justify-center items-center  text-[12px] my-1">
            <p>Edit Profile</p>
          </div>
        </div>
      </div>
    </>
  );
}
