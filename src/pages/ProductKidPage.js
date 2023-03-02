import { Link } from "react-router-dom";
import Card from "../components/Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductType from "../components/ProductType.js";

import Home from "../images/Home.jpg";
import Electronic from "../images/Electronic.jpg";
import Beauty from "../images/Beauty.jpg";
import Lifestyle from "../images/Lifestyle.jpg";
import Kid from "../images/kid.jpg";
import CardCat from "../components/CardCat";

export default function ProductKid() {
  const displayImages = [
    { image: Home, title: "Home", slash: "ProductHome" },
    { image: Electronic, title: "Electronic", slash: "ProductElectronic" },
    { image: Beauty, title: "Beauty", slash: "ProductBeauty" },
    { image: Lifestyle, title: "Lifestyle", slash: "ProductLifestyle" },
    { image: Kid, title: "Kid", slash: "ProductKid" },
  ];

  return (
    <div className="w-[390px] min-h-[845px] bg-white mx-auto">
      <div className="w-full h-[60px] px-4  bg-gradient-to-r from-orange-400 via-Amber-200  to-red-400 flex flex-row justify-between items-center">
        <Link to="/">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <div className="text-[25px] text-white font-bold ">Kid</div>
        <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </div>
      <div className="mx-4 mt-2 text-xl font-bold ">
        <div>Catagory</div>
        <div className="w-full h-[100px] flex justify-evenly my-4">
          {displayImages.map((el, idx) => (
            <Link to={`/${el.slash}`} key={idx}>
              <ProductType key={idx} image={el.image} title={el.title} />
            </Link>
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

      <div className="grid grid-cols-2 gap-2 p-2 mb-16 mx-2 ">
        <CardCat catId="5" />
      </div>
    </div>
  );
}
