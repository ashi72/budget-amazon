import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Signup from "./components/signup";
import SignIn from "./components/SignIn";
<<<<<<< HEAD
import NavBar from "./components/NavBar/NavBar";
import AddProduct from "./components/AddProduct";
=======
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
>>>>>>> 6fa614d9e243a6d7117900af799b7b43d412bcc5
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { UserContext } from "./contexts/UserContext";
import productAPI from "./services/products";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const found = JSON.parse(localStorage.getItem("user"));
    if (found) {
      // if (Date.now() > found.expiry) localStorage.removeItem("user");
      // else setUser(JSON.parse(localStorage.getItem("user")));
      setUser(found);
      productAPI.setToken(found.token);
    }
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
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
