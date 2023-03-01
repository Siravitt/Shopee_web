export default function ProductType({ image, title }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center ">
        <img
          src={image}
          alt=""
          className="h-[60px] w-[55px] bg-white rounded-xl flex justify-center items-center object-cover"
        />
        <div>
          <div className="font-light">{title}</div>
        </div>
      </div>
    </>
  );
}
