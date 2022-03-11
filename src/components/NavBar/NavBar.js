import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/commerce.png";
import useStyles from "./styles.js";

const NavBar = ({ onLogout }) => {
  const { user } = useContext(UserContext);
  const classes = useStyles();

  //  return (
  //    <nav style={{ display: "flex" }}>
  //      <h1>Bruin Market</h1>
  //      <div>{user?.name ?? "Guest Bruin"}</div>
  //      <div>
  //        <Link to="/">Home</Link>
  //        {!user && <Link to="/login">Log In</Link>}
  //        {!user && <Link to="/register">Sign Up</Link>}
  //        {user && (
  //          <a onClick={onLogout}>
  //            <u>Sign Out</u>
  //          </a>
  //        )}
  //      </div>
  //    </nav>
  //  );
  //};
  //
  //export default NavBar;

  return (
    <>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Bruin Market"
              height="25px"
              className={classes.image}
            />{" "}
            Bruin Market
          </Typography>

          <div>
            <Link to="/Products" className={classes.navlinks} color="inherit">
              {" "}
              Products{" "}
            </Link>

            <Typography
              component={Link}
              to="/review"
              className={classes.navlinks}
              color="inherit"
            >
              {" "}
              Make Review{" "}
            </Typography>

            <Typography
              component={Link}
              to="/"
              className={classes.navlinks}
              color="inherit"
            >
              {" "}
              Info{" "}
            </Typography>
          </div>

          <div className={classes.grow} />

          <div className="navaccountdisplay">
            <Link to={`/profile/${user?.username}`}>
              hello {user?.name ?? "Guest Bruin"}
            </Link>
            {"   "}
            {!user && (
              <Typography
                component={Link}
                to="/login"
                className={classes.link}
                color="inherit"
              >
                {" "}
                Login{" "}
              </Typography>
            )}
            {!user && (
              <Typography
                component={Link}
                to="/register"
                className={classes.link}
                color="inherit"
              >
                {" "}
                Register{" "}
              </Typography>
            )}
            {user && (
              <a onClick={onLogout} className="signoutwords">
                <u>Sign Out</u>
              </a>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
