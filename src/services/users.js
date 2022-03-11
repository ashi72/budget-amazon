import axios from "axios";
const baseUrl = "http://localhost:7000/users/api/v1";

const login = async (credentials) => {
  const response = await axios.post(baseUrl + "/login", credentials);
  return response.data;
};

const register = async (credentials) => {
  const response = await axios.post(baseUrl + "/register", credentials);
  return response.data;
};

const get = async (username) => {
  const response = await axios.get(baseUrl + `/fetchWithUsername/${username}`);
  return response.data;
};

export default { login, register, get };
