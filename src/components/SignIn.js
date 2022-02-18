import { useState }  from 'react'

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = (event) => {
        event.preventDefault()
        console.log(`tried to log into "${username}" with "${password}"`)
    }

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1>Sign into your account!</h1>
            <form onSubmit={login}>
                <div>
                    <label>Username or email: </label>
                    <input
                        value={username}
                        onChange={handleUserChange}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        value={password}
                        onChange={handlePassChange}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn