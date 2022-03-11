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
        <img src={Logo} alt="Bruin Market Logo" className="LogoImage" />
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search for items here"
          name="searchbarname"
        />
      </div>
      <div className="linktocatalog">
        {
          <Link to="/Products" className="navbaraddprod">
            {" "}
            Browse our products!{" "}
          </Link>
        }
      </div>
    </>
  );
};

export default Home;
