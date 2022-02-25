import { useState }  from 'react'
import ErrorMessage from "./ErrorMessage"
import LabelledInput from "./LabelledInput"

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    // dummy login
    const correctUser = 'ucla'
    const correctPass = 'la'

    const login = (event) => {
        event.preventDefault()
        console.log(`tried to log into "${username}" with "${password}"`)

        // test if states updating properly
        if (username === correctUser && password === correctPass) {
            console.log('login successful')
            setError(null)
        }
        else {
            setError('Wrong username/email or password!')
        }
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
            <ErrorMessage message={error}/>
            <form onSubmit={login}>
                <LabelledInput
                    label={"Username or Email"}
                    value={username}
                    onChange={handleUserChange}
                />
                <LabelledInput
                    label={"Password"}
                    value={password}
                    onChange={handlePassChange}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn