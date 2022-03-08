import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignupInput = (validate) => {
  const [values, setValues] = useState({
    Name: "",
    UID: "",
    Username: "",
    Email: "",
    Password: "",
    ConfPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { handleChange, values, errors, handleSubmit };
};

export default SignupInput;
