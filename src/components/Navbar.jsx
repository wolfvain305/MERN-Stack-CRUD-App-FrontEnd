import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Authentication/AuthContext'

const NavBar = () => {
    const { user, logout } = useAuth()

    return (
        <nav>
            <ul>
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