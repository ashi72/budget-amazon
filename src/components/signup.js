import { React, useContext, useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import SignupInput from "../hooks/useSignupInput";
import validateSignUp from "../services/validateSignUp";
import { UserContext } from "../contexts/UserContext";
import "../signup.css";
const Signup = () => {
  const { handleChange, handleSubmit, values, errors } =
    SignupInput(validateSignUp);

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user) {
      alert("heyo you're already logged in why are you here");
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="signup">
      <div className="signup__container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="ui form">
            <div className="entry">
              <input
                type="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <Typography style={{ color: "red" }}>{errors.name}</Typography>
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
                type="username"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && (
                <Typography style={{ color: "red" }}>
                  {errors.username}
                </Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <Typography style={{ color: "red" }}>{errors.email}</Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="Password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <Typography style={{ color: "red" }}>
                  {errors.password}
                </Typography>
              )}
            </div>
            <div className="entry">
              <input
                type="Password"
                name="confpassword"
                placeholder="Confirm Password"
                value={values.confpassword}
                onChange={handleChange}
              />
            </div>
            {errors.confpassword && (
              <Typography style={{ color: "red" }}>
                {errors.confpassword}
              </Typography>
            )}

            <button type="submit" className="signup__Button">
              Create Account
            </button>
            <span className="formLogin">
              Already have an account? Login{" "}
              <Link className="formLink" to="/login">
                here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
