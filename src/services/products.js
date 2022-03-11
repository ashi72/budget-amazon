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

export default { setToken, create };