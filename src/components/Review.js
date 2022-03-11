import React, { Component, useContext } from "react";
import useAddReview from "../hooks/useAddReview";
import validateAddReview from "../services/validateAddReview";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const { handleChange, handleSubmit, values, errors } =
    useAddReview(validateAddReview);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="hero is-primary ">
        <div className="hero-body container">
          <h4 className="title">Add Review</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Your Name: </label>
              <input
                className="input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Reviewed user: </label>
              <input
                className="input"
                type="text"
                name="ReviewedUser"
                value={values.ReviewedUser}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Rating 1-5: </label>
              <input
                className="input"
                type="number"
                name="rating"
                value={values.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Description: </label>
              <textarea
                className="textarea"
                type="text"
                rows="2"
                style={{ resize: "none" }}
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div className="field is-clearfix">
              <button
                className="button is-primary is-outlined is-pulled-right"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Review;
