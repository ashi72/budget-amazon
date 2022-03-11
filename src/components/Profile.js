import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import userAPI from "../services/users";
import { UserContext } from "../contexts/UserContext";
import productAPI from "../services/products";
import reviewAPI from "../services/reviews";
import ProductItem from "./ProductItem";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
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
          return product.seller === profile._id;
        })
      );
    });
  }, [profile, username]);

  useEffect(() => {
    reviewAPI.get(username).then((reviews) => {
      setReviews(reviews.reviews);
    });
  }, [profile, username]);

  return (
    <>
      {!user && <div>loading user...</div>}
      {user && products && <div>Hi {profile?.username}!</div>}
      {user && products && (
        <div>
          Contact {profile?.username} at {profile?.email}!
        </div>
      )}
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
          <div>
            {reviews && reviews.length ? (
              reviews.map((review, index) => <p key={index}>{review.review}</p>)
            ) : (
              <div className="column">
                <span className="title has-text-grey-light">
                  No reviews found!
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
