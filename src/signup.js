import React from "react";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };
  
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
                required
              />
            </div>
            <div className="entry">
              <input
                type="UID"
                name="UID"
                placeholder="UID"
                required
                pattern="^[0-9]{9}$"
              />
            </div>
            <div className="entry">
              <input
                type="Username"
                name="Username"
                placeholder="Username"
                required
                pattern="^[A-Za-z0-9]{3,16}$"
              />
            </div>
            <div className="entry">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="entry">
              <input
                type="Password"
                name="Password"
                placeholder="Password"
                required
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              />
            </div>
            <button type="submit" className="signup__Button">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;