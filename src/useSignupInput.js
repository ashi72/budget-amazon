import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import registerAPI from "./services/register";
import { ERRORS as ERROR } from "./constants/errors";

const SignupInput = (validate) => {
  const [values, setValues] = useState({
    name: "",
    UID: "",
    username: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(errors);
    if (Object.keys(errors).length !== 0) {
      alert("nono");
      return;
    }
    try {
      const user = await registerAPI.register(values);
      navigate("/", { replace: true });
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
  return { handleChange, values, errors, handleSubmit };
};

export default SignupInput;
