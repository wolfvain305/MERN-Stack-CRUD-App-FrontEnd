import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../assets/Authentication/AuthContext'

const NavBar = () => {
    const { user, logout } = useAuth()

    // return (
    //     <nav>
    //         <ul>
    //             <li><link to="/">Home</link></li>

    //             {!user && (
    //                 <>
    //                 <li><link to="/login">Login</link></li>
    //                 <li><link to="/signup">Sign Up</link></li>
    //                 </>
    //             )}

    //             {user && (
    //                 <>
    //                     <li><Link to="/profile">Profile</Link></li>
    //                     <li><Link to="/cart">Cart</Link></li>
    //                     <li><button onClick={logout}>Logout</button></li>
    //                     {user.admin && (
    //                         <li><Link to="/add-product">Add Product</Link></li>
    //                     )}
    //                 </>
    //             )}
    //         </ul>
    //     </nav>
    // )
}

export default NavBar