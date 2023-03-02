import axios from "../configs/axios";

export const getAllProduct = () => {
  return axios.get(`/product`);
};

export const getAllProductByCatId = categoryId => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/product/category/${categoryId}`);
};

export const getProduct = productId => {
  return axios.get(`/product/${productId}`);
};

