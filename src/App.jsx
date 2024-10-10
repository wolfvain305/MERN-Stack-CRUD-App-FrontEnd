import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext';
import NavBar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;