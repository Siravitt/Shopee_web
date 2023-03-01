import bgprofile from "../images/bgprofile.jpg";

export default function Bgprofile() {
  return (
    <>
      <div>
        <img
          src={bgprofile}
          alt=""
          className="rounded-3xl w-full h-full object-cover "
        />
      </div>
    </>
  );
}
