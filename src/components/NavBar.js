import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav style={{display: 'flex'}}>
            <h1>Bruin Market</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        </nav>
    )
}

export default NavBar