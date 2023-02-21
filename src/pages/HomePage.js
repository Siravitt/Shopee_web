import HeaderSearch from "../components/header/HeaderSearch.js";

// import BigLine from "../components/BigLine.js";
// import SmallLine from "../components/SmallLine.js";
import ProductType from "../components/ProductType.js";
import Card from "../components/Card.js";
import Carousel from "../templates/carousel";

export default function HomePage() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />

        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++  body +++++++++++++++++++++++++++++ */}
        <div className="w-[390px] min-h-[181px]  relative">
          <Carousel />
        </div>

        <div className="mx-4 text-xl font-bold mt-2">
          <div>
            <h1>Catagory</h1>
          </div>
          <div className="flex justify-between my-2 ">
            <ProductType />
            <ProductType />
            <ProductType />
            <ProductType />
            <ProductType />
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
