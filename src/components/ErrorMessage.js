const ErrorMessage = ({ messages }) => {
    if (messages === [])
        return null
    messages.sort().reverse()
    return (
        <div style={{color: 'red'}}>
            <ul>
                {messages.map(error => <li key={error}>{error}</li>)}
            </ul>
        </div>
    )
}

export default ErrorMessage