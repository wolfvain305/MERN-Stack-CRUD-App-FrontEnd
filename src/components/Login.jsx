import React, { useState } from 'react'
import { useAuth } from '../Authentication/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(username, password)
            navigate('/')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}

export default Login
