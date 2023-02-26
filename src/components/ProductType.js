import categoryHome from "../images/categoryHome.png";

export default function ProductType() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <img
          src={categoryHome}
          alt=""
          className="h-[60px] w-[55px] bg-white rounded-xl flex justify-center items-center"
        />
        <div>
          <div className="font-light">Home</div>
        </div>
      </div>
    </>
  );
}
