import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import StorefrontIcon from '@mui/icons-material/Storefront';


const NavBar = ({ onLogout }) => {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ display: "flex" }}>
      <a href="/" className="logoname">Bruin Market</a>
      <div className="navaccountdisplay">
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
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
