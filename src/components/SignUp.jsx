import React, {useState} from "react";
import { useAuth } from "../Authentication/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const[userData, setUserData] = useState({ username: '', password: ''})
    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(userData)
            navigate('/')
        } catch (error) {
            console.error('Sign up failed:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label>First Name</label>
                <input value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} required />
            </div>
            <div>
                <label>Last Name</label>
                <input value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} required />
            </div>
            <div>
                <label>Username</label>
                <input value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp