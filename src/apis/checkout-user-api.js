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
export const createCharge = (input) =>
  axios.post("/user/checkout/create-charge", input);

export const createOrder = (input) =>
  axios.post("/user/order/create-order", input);
export const getshinppingOrderShop = (shinpping) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`/user/order/all-order?status=${shinpping}`);
};

export const updateOderShopForUser = (orderShopId) => {
  return axios.patch(
    `http://localhost:8000/user/order/update-order/${orderShopId}`
  );
};
