import "./Home.css";
import Logo from "../assets/commerce.png";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate("/products", { state: { query: search } });
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="LogoAlign">
        <img src={Logo} alt="Bruin Market Logo" className="LogoImage" />
      </div>
      <div className="searchbar">
        <form onSubmit={handleSearchSubmit} className="searchbar">
          <input
            type="text"
            placeholder="search for items here"
            name="searchbarnamehome"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="linktocatalog">
        {
          <Link to="/products" className="navbaraddprod">
            {" "}
            Browse our products!{" "}
          </Link>
        }
      </div>
    </>
  );
};

export default Home;
