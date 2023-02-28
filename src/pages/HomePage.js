import HeaderSearch from "../components/header/HeaderSearch.js";

// import BigLine from "../components/BigLine.js";
// import SmallLine from "../components/SmallLine.js";
import ProductType from "../components/ProductType.js";
import Card from "../components/Card.js";
import Carousel from "../templates/carousel";
import Home from "../images/Home.jpg";
import Electronic from "../images/Electronic.jpg";
import Beauty from "../images/Beauty.jpg";
import Lifestyle from "../images/Lifestyle.jpg";
import { useSelector } from "react-redux";

export default function HomePage() {
  const displayImages = [
    { image: Home, title: "Home" },
    { image: Electronic, title: "Electronic" },
    { image: Beauty, title: "Beauty" },
    { image: Lifestyle, title: "Lifestyle" },
    { image: Lifestyle, title: "Lifestyle" },
  ];
  // const auth = useSelector(state => state.auth.auth);
  // console.log("kram เอง", auth);
  return (
    <>
      <div className="w-full h-full">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />

        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++  body +++++++++++++++++++++++++++++ */}
        <div className="w-full h-[350px] relative">
          <Carousel />
        </div>

        <div className="mx-4 mt-2 text-xl font-bold">
          <div>Catagory</div>
          <div className="w-full h-[100px] flex  justify-between gap-3 my-4">
            {displayImages.map((el, idx) => (
              <ProductType key={idx} image={el.image} title={el.title} />
            ))}

            {/* <ProductType Home={Home} />
            <ProductType Electronic={Electronic} />
            <ProductType Beauty={Beauty} />
            <ProductType Lifestyle={Lifestyle} /> */}
          </div>
        </div>
        <hr className="bg-gray mx-4 my-4 border-2" />

        {/* body2 */}

        {/* body2 */}

        {/* +++++++++++++++++++++++++++++ END body +++++++++++++++++++++++++++++ */}

        <div className="mx-4 text-xl font-bold">
          <h1>Product</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 mb-16 mx-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* +++++++++++++++++++++++++++++ footer +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ END footer +++++++++++++++++++++++++++++ */}

        {/* before end */}
      </div>
    </>
  );
}
