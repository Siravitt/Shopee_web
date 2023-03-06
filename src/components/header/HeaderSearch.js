import React, { useEffect, useState } from "react";
import { thunkSearchProduct } from "../../reduxStore/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/UseDebounce";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

function HeaderSearch({ searchItem, setSearchItem }) {
  const dispatch = useDispatch();
  const dbSearch = useDebounce(searchItem, 1000);

  useEffect(() => {
    dispatch(thunkSearchProduct(searchItem));
  }, [dbSearch]);

  return (
    <>
      <div className="w-full h-[60px] px-4 bg-red-300 flex items-center top-0 sticky z-10">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search"
              className="block w-72 h-8 p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
              required
            />
          </div>
        </form>
        <button className="w-[50px] h-[50px] ml-4 flex items-center justify-center">
          {/* <ShoppingCartOutlinedIcon sx={{ fontSize: 30, color: "white" }} /> */}
          <NotificationsActiveOutlinedIcon
            sx={{ fontSize: 30, color: "white" }}
          />
        </button>
      </div>
    </>
  );
}

export default HeaderSearch;
