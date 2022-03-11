import axios from "axios";
const baseUrl = "http://localhost:7000/products/api/v1";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (information) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(
    baseUrl + "/createProductListing",
    information,
    config
  );
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(baseUrl + `/delete/${id}`);
  return response.data;
};

const get = async (id) => {
  const response = await axios.get(baseUrl + `/fetchProduct/${id}`);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl + "/fetchAllProducts");
  return response.data.products;
};

export default { setToken, create, remove, get, getAll };
