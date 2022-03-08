import { React } from "react";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import SignupInput from "./useSignupInput";
import validateSignUp from "./validateSignUp";

const Signup = () => {
  const { handleChange, handleSubmit, values, errors } =
    SignupInput(validateSignUp);

  return (
    <div className="signup">
      <div className="signup__container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="entry">
              <input
                type="Name"
                name="Name"
                placeholder="Name"
                value={values.Name}
                onChange={handleChange}
              />
              {errors.Name && (
                <Typography style={{ color: "red" }}>{errors.Name}</Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="UID"
                name="UID"
                placeholder="UID"
                value={values.UID}
                onChange={handleChange}
              />
              {errors.UID && (
                <Typography style={{ color: "red" }}>{errors.UID}</Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="Username"
                name="Username"
                placeholder="Username"
                value={values.Username}
                onChange={handleChange}
              />
              {errors.Username && (
                <Typography style={{ color: "red" }}>
                  {errors.Username}
                </Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="text"
                name="Email"
                placeholder="E-mail"
                value={values.Email}
                onChange={handleChange}
              />
              {errors.Email && (
                <Typography style={{ color: "red" }}>{errors.Email}</Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="Password"
                name="Password"
                placeholder="Password"
                value={values.Password}
                onChange={handleChange}
              />
              {errors.Password && (
                <Typography style={{ color: "red" }}>
                  {errors.Password}
                </Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="Password"
                name="ConfPassword"
                placeholder="Confirm Password"
                value={values.ConfPassword}
                onChange={handleChange}
              />
            </div>
            {errors.ConfPassword && (
              <Typography style={{ color: "red" }}>
                {errors.ConfPassword}
              </Typography>
            )}

            <button type="submit" className="signup__Button">
              Create Account
            </button>
            <span className="formLogin">
              Already have an account? Login <Link to="/login">here</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
