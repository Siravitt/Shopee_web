import axios from "../configs/axios";

export const createAddress = input =>
  axios.post("/user/address/create-address", input);

export const getAllAddress = () => axios.get("/user/address/all-address");

export const editAddress = (addressId, input) =>
  axios.patch(`/user/address/edit-address/${addressId}`, input);

// export const getAddressById = () =>
//   axios.get("/user/address/id-address/:addressId");
