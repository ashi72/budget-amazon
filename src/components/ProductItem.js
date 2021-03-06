import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productAPI from "../services/products";
import userAPI from "../services/users";

const ProductItem = (props) => {
  const [seller, setSeller] = useState("");
  const { product } = props;
  const navigate = useNavigate();

  useEffect(() => {
    userAPI.getWithID(product.seller).then((user) => {
      setSeller(user.user.username);
    });
  }, []);

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={
                  product.imageURL ||
                  "https://bulma.io/images/placeholders/128x128.png"
                }
                alt={product.shortDesc}
                width="128"
                height="128"
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              <Link to={`/products/${product._id}`}>{product.name} </Link>
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{`Seller: ${seller}`}</div>
            <div>{product.shortDesc}</div>
            {
              /*{product.stock > 0}*/ true ? (
                <small>{/*product.stock*/ "Available"}</small>
              ) : (
                <small className="has-text-danger">Out Of Stock</small>
              )
            }
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() => {
                  productAPI.remove(product._id);
                  navigate(`/profile/${seller}`);
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
