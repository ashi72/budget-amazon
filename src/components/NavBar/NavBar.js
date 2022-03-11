 import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import { UserContext } from "../../contexts/UserContext";
import logo from '../../assets/commerce.png';
import useStyles from './styles.js';

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
            <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: 'Blue' , color: 'Yellow'}}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color = 'inherit'>
                        <img src={logo} alt="Bruin Market" height="25px" className={classes.image} /> Bruin Market
              </Typography>
                    <div className={classes.grow} />
                    
                    <div className={classes.navlinks} >
                        {!user && <Link to="/login">'Log In  '</Link>}


                        {!user && <Link to="/register"> 'Sign Up  ' </Link> }


                            {user && (
                                <a onClick={onLogout}>
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