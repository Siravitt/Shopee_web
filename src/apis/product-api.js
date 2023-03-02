import axios from "../configs/axios";

export const getAllproduct = () => {
  return axios.get(`/product`);
};

export const getAllproductByCatId = categoryId => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/product/category/${categoryId}`);
};

export const getProduct = productId => {
  return axios.get(`/product/${productId}`);
};
// export const getAllproduct = (query = null) => {
//   const queryString = new URLSearchParams(query).toString();

//   return axios.get(`/product?${queryString}`);
// };
