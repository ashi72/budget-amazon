import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import productAPI from "../services/products";

const useAddProduct = (validate) => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    stock: "",
    shortDesc: "",
    description: "",
    condition: "",
    seller: "",
    imageURL: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validate(values));
    if (Object.keys(errors).length !== 0) {
      alert("nono");
      return;
    }
    try {
      const product = await productAPI.create(values);
      navigate("/");
    } catch (e) {
      // if (!error.includes(ERROR.WRONG_COMBO)) {
      //   setError(error.concat(ERROR.WRONG_COMBO));
      // }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useAddProduct;
