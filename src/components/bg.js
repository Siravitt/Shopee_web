import bg1 from "../images/bg1.jpg";

export default function Bg() {
  return (
    <>
      <div>
        <img
          src={bg1}
          alt=""
          className="rounded-3xl w-full h-full object-cover "
        />
      </div>
    </>
  );
}
