import "./Home.css";
import BruinMarketLogo from "../Bruin_Market_Home.png";
const Home = () => {
  return (
    <>
      <div className="LogoAlign">
        <img src={BruinMarketLogo} alt="Bruin Market Logo" />
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search for items here"
          name="searchbarname"
        />
      </div>
    </>
  );
};

export default Home;
