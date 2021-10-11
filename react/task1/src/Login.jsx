import React from 'react'

const Login = ({onLogin}) => {
    return (
        <button className="logout btn" onClick={onLogin}>
            Login
        </button>
    )
}

export default Login
