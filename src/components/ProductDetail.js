import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productAPI from "../services/products";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    productAPI.get(id).then((product) => {
      setProduct(product);
    });
  }, []);
  return (
    <>
      {!product && <div>loading</div>}
      {product && (
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
                    width="512"
                    height="512"
                  />
                </figure>
              </div>
              <div className="media-content">
                <b style={{ textTransform: "capitalize" }}>
                  <Link to={`/products/${product._id}`}>{product.name} </Link>
                  <span className="tag is-primary">${product.price}</span>
                </b>
                <div>{product.shortDesc}</div>
                {product.stock > 0 ? (
                  <small>{product.stock + " Available"}</small>
                ) : (
                  <small className="has-text-danger">Out Of Stock</small>
                )}
                <div className="is-clearfix">
                  <button
                    className="button is-small is-outlined is-primary   is-pulled-right"
                    onClick={() => console.log("do something")}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
