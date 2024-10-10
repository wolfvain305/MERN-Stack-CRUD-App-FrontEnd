import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-product">Add New Product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar