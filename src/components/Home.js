import "./Home.css";
import Logo from "../assets/commerce.png";
const Home = () => {
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
          Browse our catalog
        </a>
      </div>
    </>
  );
};

export default Home;
