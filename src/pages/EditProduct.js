import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// import Input from "../Input";

export default function EditProduct() {
  const dispatch = useDispatch();
  const updateInfo = useSelector((state) => state.auth.auth);
  const [input, setInput] = useState({
    name: "",
    price: "",
    name: "",
    description: "",
    weight: "",
    quantity: "",
    category: "",
    image: null,
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("price", input.price);
    formData.append("description", input.description);
    formData.append("weight", input.weight);
    formData.append("quantity", input.quantity);
    formData.append("category", input.category);
    formData.append("image", input.editImage);

    // const res = await userApi.updateProfile(formData); //??
    // setAuthenticatedUser(res.data.newUser); //??
    // onSuccess();
    // toast.success("Product Successfully updated");
  };

  return (
    <div className="w-[390px] min-h-[845px]  mx-auto border bg-blue-400 ">
      <div className="w-full flex flex-row h-[70px] px-4 items-center">
        <Link to="/myShoppage">
          <ArrowBackIosIcon sx={{ color: "white", fontSize: 25 }} />
        </Link>
        <h4 className="text-2xl text-white font-bold ">Edit Product</h4>
      </div>

      <div className=" bg-blue-400 mx-4 ">
        <form
          onSubmit={handleSubmitForm}
          className="gap-4 p-8 bg-white mt-4 rounded-xl"
        >
          <div className="flex items-center justify-center w-full border rounded-xl border-blue-400 ">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-48 border-blue-400 rounded-xl cursor-pointer bg-blue-50 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-blue-400 ">
                  <span className="font-semibold">Upload Product Photo</span>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
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
              //   value={input.address}
              //   onChange={handleChangeInput}
            />
          </div>
          <select className="select w-full max-w-md bg-white border-blue-400  mx-auto  text-blue-400">
            <option defaultChecked>Category</option>
            {/* <option disabled selected>
              Category
            </option> */}
            <option>Beauty</option>
            <option>Kids</option>
            <option>Home</option>
            <option>Lifestyle</option>
            <option>Technology</option>
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
