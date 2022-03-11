import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import userAPI from "../services/users";
import { UserContext } from "../contexts/UserContext";
import productAPI from "../services/products";
import ProductItem from "./ProductItem";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const { username } = useParams();

  useEffect(() => {
    userAPI.get(username).then((user) => {
      setProfile(user.user);
    });
  }, []);

  useEffect(() => {
    productAPI.getAll().then((products) => {
      setProducts(
        products.filter((product) => {
          return product.seller === profile?._id;
        })
      );
    });
  }, []);

  return (
    <>
      {!user && <div>loading user...</div>}
      {user && products && <div>Hi {profile?.username}!</div>}
      {user && products && (
        <div className="container">
          <div className="column columns is-multiline">
            {products && products.length ? (
              products.map((product, index) => (
                <ProductItem product={product} key={index} />
              ))
            ) : (
              <div className="column">
                <span className="title has-text-grey-light">
                  No products found!
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
