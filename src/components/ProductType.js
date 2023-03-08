export default function ProductType({ image, title }) {
  return (
    <>
      <div className=" flex flex-col items-center">
        <img
          src={image}
          alt=""
          className="h-[60px] w-[55px] bg-white rounded-xl flex justify-center items-center object-cover"
        />
        <div>
          <div className="text-[12px]">{title}</div>
        </div>
      </div>
    </>
  );
}
