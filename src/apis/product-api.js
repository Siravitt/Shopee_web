import axios from "../configs/axios";

export const getAllproduct = (query = null) => {
  const queryString = new URLSearchParams(query).toString();

  return axios.get(`/product?${queryString}`);
};
