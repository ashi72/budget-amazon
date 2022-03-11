import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Signup from "./components/signup";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList"
import ProductItem from "./components/ProductItem"
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const found = JSON.parse(localStorage.getItem("user"));
    if (found)
      if (Date.now() > found.expiry) localStorage.removeItem("user");
      else setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <NavBar onLogout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product" element={<ProductItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
