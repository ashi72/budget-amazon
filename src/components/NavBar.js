import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import StorefrontIcon from "@mui/icons-material/StorefrontOutlined";
import BruinMarketLogo from "../Bruin_Market.png";
import { Typography } from "@material-ui/core";

const NavBar = ({ onLogout }) => {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ display: "flex" }}>
      <Typography style={{ marginLeft: -10, marginRight: 2 }}>
        <a href="/" className="logoname">
          <img src={BruinMarketLogo} alt="Logo" className="BruinMarketLogo" />
        </a>
      </Typography>
      <div className="navaccountdisplay">
        <div>{user?.name ?? "Guest Bruin"}</div>
        <div>
          {!user && <Link to="/login">Log In</Link>}
          {!user && <Link to="/register">Sign Up</Link>}
          {user && (
            <a onClick={onLogout}>
              <u>Sign Out</u>
            </a>
          )}
          {user && <Link to="/addproduct"> Add a product! </Link>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
