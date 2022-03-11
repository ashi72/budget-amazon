import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

import productAPI from "../services/products";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { state } = useLocation();
  let query;
  if (state) query = state.query;

  useEffect(() => {
    if (query) setSearch(query);
    productAPI.getAll().then((products) => {
      setProducts(
        products.filter((product) => {
          const productName = product?.name?.toLowerCase();
          // TODO: Remove condition once database has been flushed
          if (productName) return productName.includes(search.toLowerCase());
          return true;
        })
      );
    });
  }, [search]);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="searchbar">
        <input
          type="text"
          placeholder="search for items here"
          name="searchbarname"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <br />
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
    </>
  );
};

export default ProductList;
