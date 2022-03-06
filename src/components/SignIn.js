import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ErrorMessage from "./ErrorMessage"
import LabelledInput from "./LabelledInput"
import { UserContext } from '../contexts/UserContext'
import { ERRORS as ERROR } from "../constants/errors.js"

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    // dummy login
    const correctUser = 'ucla'
    const correctPass = 'la'

    useEffect(() => {
        if(user) {
            alert("heyo you're already logged in why are you here")
            navigate('/', { replace: true })
        }
    }, [user])

    const login = (event) => {
        event.preventDefault()
        console.log(`tried to log into "${username}" with "${password}"`)

        // test if states updating properly
        if (username === correctUser && password === correctPass) {
            console.log('login successful')
            setError([])
            let response = {
                username: 'bruin',
                token: 1,
                expiry: Date.now() + 10000 // 10 seconds until token expires
            }
            setUser(response)
            localStorage.setItem('user', JSON.stringify(response))
            navigate('/', { replace: true })
        }
        else if(!error.includes(ERROR.WRONG_COMBO)) {
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
                    type={'text'}
                    label={"Username or Email"}
                    value={username}
                    onChange={handleUserChange}
                />
                <LabelledInput
                    type={'password'}
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