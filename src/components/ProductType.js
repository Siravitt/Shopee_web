export default function ProductType({ image, title }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-2">
        <img
          src={image}
          alt=""
          className="shrink-0 h-[55px] w-[55px] bg-white rounded-xl flex justify-center items-center object-cover"
        />
        <div>
          <div className="text-[12px]">{title}</div>
        </div>
      </div>
    </>
  );
}
