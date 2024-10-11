import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Authentication/AuthContext'
import '../styles/NavBar.css'

const NavBar = () => {
    const { user, logout } = useAuth()

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
            <img src="https://files.oaiusercontent.com/file-FeZlB9wz0imMdAQBGeq3OqRh?se=2024-10-11T00%3A56%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1cddb43b-f327-4be2-95ae-39ebc295d051.webp&sig=PMt34H0EnOyuVrW3cwJoqMaRYe5FEaBiGnBuvx0mq4s%3D" alt="Logo" className="logo" />
            <h1>STARR's Creations</h1>
            </div>
                <ul className = "navbar-links">
                    <li><Link to="/">Home</Link></li>

                    {!user && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </>
                    )}

                    {user && (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><button onClick={logout}>Logout</button></li>
                            {user.admin && (
                                <li><Link to="/add-product">Add Product</Link></li>
                            )}
                        </>
                    )}
                </ul>
        </nav>
    )
}

export default NavBar

