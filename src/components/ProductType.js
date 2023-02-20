import categoryHome from "../images/categoryHome.png";

export default function ProductType() {
  return (
    <>
      <div className="">
        <img
          src={categoryHome}
          alt=""
          className="h-[63px] w-[68px] bg-white rounded-xl flex justify-center items-center"
        />
        <div>
          <h1 className="font-light">Home</h1>
        </div>
      </div>
    </>
  );
}
