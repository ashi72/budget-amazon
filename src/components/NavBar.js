import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

const NavBar = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <nav style={{display: 'flex'}}>
            <h1>Bruin Market</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
            </div>
            <div>{JSON.stringify(user, null, 2)}</div>
        </nav>
    )
}

export default NavBar