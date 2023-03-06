import axios from "../configs/axios";

// export const getAllproductShop = () => {
//   return axios.get(`/product`);
// };

export const getcheckoutProductUser = (pending) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/user/order/all-order?status=${pending}`);
};
// export const getAllproduct = (query = null) => {
//   const queryString = new URLSearchParams(query).toString();

//   return axios.get(`/product?${queryString}`);
// };
