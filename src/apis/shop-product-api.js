import axios from "../configs/axios";

export const createProduct = (input) =>
  axios.post("/shop/product/create-product", input);

// export const getAllproductShop = () => {
//   return axios.get(`/product`);
// };

export const getAllproductShopByShopId = (shopId) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/Shopproduct/${shopId}`);
};
// export const getAllproduct = (query = null) => {
//   const queryString = new URLSearchParams(query).toString();

//   return axios.get(`/product?${queryString}`);
// };

export const getShopInfoPublic = (shopId) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/shop/${shopId}`);
};

export const getProductByShop = () => axios.get("/shop/product/all-product");
