import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import Signup from './signup'
import SignIn from "./components/SignIn"
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
