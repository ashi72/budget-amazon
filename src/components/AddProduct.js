import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import validateAddProduct from "../services/validateAddProduct";
import useAddProduct from "../hooks/useAddProduct";

const AddProduct = () => {
  const { handleChange, handleSubmit, values, errors } =
    useAddProduct(validateAddProduct);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     alert("heyo you're NOT logged in why are you here");
  //     navigate("/", { replace: true });
  //   }
  // }, [user, navigate()]);

  return (
    <>
      <div className="hero is-primary ">
        <div className="hero-body container">
          <h4 className="title">Add Product</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Product Name: </label>
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
              <label className="label">Price: </label>
              <input
                className="input"
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Available in Stock: </label>
              <input
                className="input"
                type="number"
                name="stock"
                value={values.stock}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Short Description: </label>
              <input
                className="input"
                type="text"
                name="shortDesc"
                value={values.shortDesc}
                onChange={handleChange}
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
            <div className="field">
              <label className="label">Condition: </label>
              <input
                className="input"
                type="text"
                name="condition"
                value={values.condition}
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

export default AddProduct;
