import axios from "../configs/axios";

// export const getAllproductShop = () => {
//   return axios.get(`/product`);
// };

export const getcheckoutProductShop = (pendingShop) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`shop/order/all-order?status=${pendingShop}`);
};
export const getcheckoutOrderShop = (pendingShop) => {
  // const queryString = new URLSearchParams().toString();

  return axios.get(`shop/order/all-orderShop?status=${pendingShop}`);
};
export const updateOderShop = (updateid, inputstatus) => {
  // const queryString = new URLSearchParams().toString();

  return axios.patch("http://localhost:8000/shop/order/update-order", {
    status: inputstatus,
    orderShopId: updateid,
  });
};
// export const getAllproduct = (query = null) => {
//   const queryString = new URLSearchParams(query).toString();

//   return axios.get(`/product?${queryString}`);
// };
