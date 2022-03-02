import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from "./components/Home"
import Signup from './signup'
import SignIn from "./components/SignIn"
import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import { UserContext } from "./contexts/UserContext"

function App() {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<Signup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
