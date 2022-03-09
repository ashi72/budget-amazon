import axios from "axios";
const baseUrl = "http://localhost:7000/products/api/v1/createProductListing";

const addProduct = async (information) => {
  const response = await axios.post(baseUrl, information);
  return response.data;
};

export default { addProduct };
