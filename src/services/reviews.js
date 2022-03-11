import axios from "axios";
const baseUrl = "http://localhost:7000/reviews/api/v1";

const create = async (information) => {
  const requestInfo = {
    reviewer: information.name,
    starRatings: information.rating,
    seller: information.ReviewedUser,
    review: information.description,
  };
  const response = await axios.post(baseUrl + "/postReview", requestInfo);
  return response.data;
};

const get = async (username) => {
  const response = await axios.get(baseUrl + `/fetchSellerReviews/${username}`);
  console.log(response.data);
  return response.data;
};

export default { create, get };
