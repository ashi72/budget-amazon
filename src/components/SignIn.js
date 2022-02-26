import { useState }  from 'react'
import ErrorMessage from "./ErrorMessage"
import LabelledInput from "./LabelledInput"
import { ERRORS as ERROR } from "../constants/errors.js"

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    // dummy login
    const correctUser = 'ucla'
    const correctPass = 'la'

    const login = (event) => {
        event.preventDefault()
        console.log(`tried to log into "${username}" with "${password}"`)

        // test if states updating properly
        if (username === correctUser && password === correctPass) {
            console.log('login successful')
            setError([])
        }
        else {
            setError(error.concat(ERROR.WRONG_COMBO))
        }
    }

    const handleUserChange = (event) => {
        setUsername(event.target.value)
        if (!event.target.value.includes(' '))
            setError(error.filter((e) => e !== ERROR.NO_SPACES_USER))
        else if(!error.includes(ERROR.NO_SPACES_USER))
            setError(error.concat(ERROR.NO_SPACES_USER))

    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
        if (!event.target.value.includes(' '))
            setError(error.filter((e) => e !== ERROR.NO_SPACES_PASS))
        else if(!error.includes(ERROR.NO_SPACES_PASS))
            setError(error.concat(ERROR.NO_SPACES_PASS))
    }

    return (
        <div>
            <h1>Sign into your account!</h1>
            <ErrorMessage messages={error}/>
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
                <button type="submit" disabled={error.includes(ERROR.NO_SPACES_USER) || error.includes(ERROR.NO_SPACES_PASS)}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn