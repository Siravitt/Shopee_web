import bg1 from "../images/bg1.jpg";
import logo from "../images/logo.png";

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
