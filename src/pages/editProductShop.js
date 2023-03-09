import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { createProduct } from "../apis/shop-product-api";
import { editProduct, getProduct } from "../apis/product-api";
import axios from "axios";

const initialInput = {
  // name: "",
  // price: "",
  // description: "",
  // weight: "",
  // quantityAvailable: "",
  // categoryId: "",
};

export default function EditProductShop() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    weight: "",
    quantityAvailable: "",
    categoryId: "",
    image: null,
  });

  console.log(input);
  const [productImage, setProductImage] = useState({});

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:8000/product/${productId}`);
    console.log("product", res.data);
    setInput({
      name: res.data.product.name,
      price: res.data.product.price,
      description: res.data.product.description,
      weight: res.data.product.weight,
      quantityAvailable: res.data.product.quantityAvailable,
      categoryId: res.data.product.categoryId,
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  const [image, setImage] = useState([]);
  console.log("image", productImage);
  const getImage = async () => {
    const res = await axios.get("http://localhost:8000/image/" + productId);
    setProductImage(res.data.image);
  };
  useEffect(() => {
    getImage();
  }, []);

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await editProduct(productId, input);
      navigate("/shop-home");
      // setInput(initialInput);
      // console.log(">>>>>>>>> ", initialInput);
      // toast.success("Success add product");
    } catch (err) {
      // console.log(err);
      // toast.error(err.response?.data.message);
    }

    navigate("/shop-home");
  };

  const handleOnChangeImage = (e, number) => {
    const newProductImage = structuredClone(productImage);
    newProductImage[number] = e.target.files[0];
    setProductImage(newProductImage);
  };

  return (
    <div className="w-[390px] min-h-[845px]  mx-auto border bg-blue-400 ">
      <div className="w-full flex flex-row h-[70px] px-4 items-center justify-between">
        <Link to="/shop-home">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <h4 className="text-2xl text-white font-bold ">Edit Product</h4>
      </div>

      <div className=" bg-blue-400 mx-4 ">
        <form
          onSubmit={handleSubmitForm}
          className="gap-2 p-8 bg-white mt-4 rounded-xl"
        >
          <p className="text-blue-400 text-md ">Add Images +</p>
          <div className="flex flex-row gap-4 my-4">
            {/* UploadPhoto */}
            <div className=" flex items-center justify-center w-52 border rounded-xl border-blue-400 ">
              {/* {!productImage.one ? (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full rounded-xl cursor-pointer "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                    <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={e => handleOnChangeImage(e, "one")}
                  />
                </label>
              ) : ( */}

              {productImage[0]?.image ? (
                <img
                  src={productImage[0]?.image}
                  alt=""
                  className="w-[87px] h-[87px] rounded-xl object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                  <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                </div>
              )}

              {/* )} */}
            </div>
            {/* End-UploadPhoto */}

            {/* UploadPhoto */}
            <div className=" flex items-center justify-center w-52 border rounded-xl border-blue-400 ">
              {/* {!productImage.two ? (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full rounded-xl cursor-pointer "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                    <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={e => handleOnChangeImage(e, "two")}
                  />
                </label>
              ) : (
                <img
                  src={URL.createObjectURL(productImage.two)}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
              )} */}
              {productImage[1]?.image ? (
                <img
                  src={productImage[1]?.image}
                  alt=""
                  className="w-[87px] h-[87px] rounded-xl object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                  <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                </div>
              )}
            </div>
            {/* End-UploadPhoto */}

            {/* UploadPhoto */}
            <div className=" flex items-center justify-center w-52 border rounded-xl border-blue-400 ">
              {/* {!productImage.three ? (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full rounded-xl cursor-pointer "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                    <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={e => handleOnChangeImage(e, "three")}
                  />
                </label>
              ) : (
                <img
                  src={URL.createObjectURL(productImage.three)}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
              )} */}
              {productImage[2]?.image ? (
                <img
                  src={productImage[2]?.image}
                  alt=""
                  className="w-[87px] h-[87px] rounded-xl object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                  <AddAPhotoIcon sx={{ color: "royalblue", fontSize: 30 }} />
                </div>
              )}
            </div>
            {/* End-UploadPhoto */}
          </div>

          <div className="relative">
            <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
              Product name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChangeInput}
              className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            />
          </div>

          <div className="relative">
            <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={input.price}
              onChange={handleChangeInput}
              className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            />
          </div>
          <div className="relative">
            <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={handleChangeInput}
              className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            />
          </div>
          <div className="relative">
            <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
              Weight
            </label>
            <input
              type="number"
              name="weight"
              value={input.weight}
              onChange={handleChangeInput}
              className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            />
          </div>
          <div className="relative">
            <label className="bg-white text-blue-400 px-2 absolute -top-2 left-2">
              Quantity
            </label>
            <input
              type="text"
              name="quantityAvailable"
              value={input.quantityAvailable}
              onChange={handleChangeInput}
              className="border border-blue-400 bg-white my-4 rounded-md px-4 pt-4 pb-2 block w-full sm:text-sm "
            />
          </div>
          <select
            name="categoryId"
            onChange={handleChangeInput}
            className="select w-full max-w-md bg-white border-blue-400  mx-auto  text-blue-400"
          >
            <option defaultChecked value={input.categoryId}>
              Category
            </option>
            {/* <option disabled selected>
              Category
            </option> */}
            <option name="Fashion" value={1}>
              Fashion
            </option>
            <option value={2}>Kids</option>
            <option value={3}>Home</option>
            <option value={4}>Lifestyle</option>
            <option value={5}>Technology</option>
          </select>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-400 py-2 px-12 mt-4 rounded-md text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
