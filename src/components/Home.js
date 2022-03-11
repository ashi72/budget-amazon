import "./Home.css";
import Logo from "../assets/commerce.png";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="LogoAlign">
        <img src={Logo} alt="Bruin Market Logo" />
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search for items here"
          name="searchbarname"
        />
      </div>
      <div className="linktocatalog">
        <a href="#" className="linktocatalog">
          {user && (
            <Link to="/addproduct" className="navbaraddprod">
              {" "}
              Add a product!{" "}
            </Link>
          )}
        </a>
      </div>
    </>
  );
};

export default Home;
