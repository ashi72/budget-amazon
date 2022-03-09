import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const NavBar = ({ onLogout }) => {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ display: "flex" }}>
      <h1>Bruin Market</h1>
      <div>{user?.name ?? "Guest Bruin"}</div>
      <div>
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Log In</Link>}
        {!user && <Link to="/register">Sign Up</Link>}
        {user && (
          <a onClick={onLogout}>
            <u>Sign Out</u>
          </a>
        )}
        {user && <Link to="/addproduct"> Add a product! </Link>}
      </div>
    </nav>
  );
};

export default NavBar;
