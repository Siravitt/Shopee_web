import { useState } from "react";
import HeaderSearch from "../components/header/HeaderSearch.js";
import ProductType from "../components/ProductType.js";
import Card from "../components/Card.js";
import Home from "../images/Home.jpg";
import Electronic from "../images/Electronic.jpg";
import Beauty from "../images/Beauty.jpg";
import Lifestyle from "../images/Lifestyle.jpg";
import Kid from "../images/kid.jpg";
import { Link } from "react-router-dom";
import Welcome from "../images/Welcome.mp4";
import Spinner from "../components/Spinner.js";
import { getLoading } from "../reduxStore/Loading";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const [searchItem, setSearchItem] = useState("");
  const stateLoading = useSelector(state => state.allProduct.loading);

  const displayImages = [
    { image: Home, title: "Home", slash: "ProductHome" },
    { image: Electronic, title: "Electronic", slash: "ProductElectronic" },
    { image: Beauty, title: "Beauty", slash: "ProductBeauty" },
    { image: Lifestyle, title: "Lifestyle", slash: "ProductLifestyle" },
    { image: Kid, title: "Kid", slash: "ProductKid" },
  ];
  return (
    <>
      {stateLoading ? <Spinner /> : null}
      <div className="w-full min-h-[844px] bg-gray-50 mx-auto border  ">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch searchItem={searchItem} setSearchItem={setSearchItem} />

        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ *}
          {/* +++++++++++++++++++++++++++++  body +++++++++++++++++++++++++++++ */}
        <div className="w-full relative pt-1">
          <video
            // className="h-[845px] object-cover"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source src={Welcome} type="video/mp4" />
          </video>

          {/* <Carousel /> */}
        </div>

        <div className="mx-4 mt-2 text-xl font-bold">
          <div>Catagory</div>
          <div className="w-full h-[100px] flex justify-evenly my-4">
            {/* <div className="w-full h-[100px] flex  justify-between my-4"> */}
            {displayImages.map((el, idx) => (
              <Link to={`/${el.slash}`} key={idx}>
                <ProductType key={idx} image={el.image} title={el.title} />
              </Link>
            ))}
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
        </div>
        {/* +++++++++++++++++++++++++++++ footer +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++ END footer +++++++++++++++++++++++++++++ */}

        {/* before end */}
      </div>
    </>
  );
}
