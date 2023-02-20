import HeaderSearch from "../components/header/HeaderSearch.js";

// import BigLine from "../components/BigLine.js";
// import SmallLine from "../components/SmallLine.js";
import ProductType from "../components/ProductType.js";
import Card from "../components/Card.js";

function Home() {
  return (
    <>
      <div className="w-[390px] min-h-[844px] bg-gray-100 mx-auto border  ">
        {/* +++++++++++++++++++++++++++++ header search +++++++++++++++++++++++++++++ */}
        <HeaderSearch />

        {/* +++++++++++++++++++++++++++++ END header search +++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++  body +++++++++++++++++++++++++++++ */}
        <div className="w-[390px] min-h-[181px] bg-pink-300 mt-[70px]"></div>

        <div className="px-4 ">
          <div>
            <h1>Catagory</h1>
          </div>
          <div className="flex justify-between">
            <ProductType />
            <ProductType />
            <ProductType />
            <ProductType />
          </div>
        </div>

        {/* body2 */}

        {/* body2 */}

        {/* +++++++++++++++++++++++++++++ END body +++++++++++++++++++++++++++++ */}

        <div className="grid grid-cols-2 gap-2 p-2 ">
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

export default Home;
