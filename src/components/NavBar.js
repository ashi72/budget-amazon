import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const NavBar = ({ onLogout }) => {
<<<<<<< HEAD
  const { user } = useContext(UserContext);

  return (
    <nav style={{ display: "flex" }}>
      <h1>Bruin Market</h1>
      <div>{user?.username}</div>
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
    </nav>
  );
};
=======
    const {user} = useContext(UserContext)

    return (
        <nav style={{display: 'flex'}}>
            <h1>Bruin Market</h1>
            <div>{user?.username ?? 'Guest Bruin'}</div>
            <div>
                <Link to="/">Home</Link>
                {!user && <Link to="/login">Log In</Link>}
                {!user && <Link to="/register">Sign Up</Link>}
                {user && <a onClick={onLogout}><u>Sign Out</u></a>}
            </div>
        </nav>
    )
}
>>>>>>> cbb3ec7ea1bece82897eec97e377e4249fcaf216

export default NavBar;
