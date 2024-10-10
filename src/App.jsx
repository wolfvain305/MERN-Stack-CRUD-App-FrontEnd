import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import NavBar from './components/Navbar'

const App = () => {
  return (
      <Router>
          <div>
              <NavBar></NavBar>
              <h1>Welcome to Our Bakery</h1>
              <Routes>
                  <Route exact path="/" element={<ProductList/>} />
                  <Route path="/add-product" element={<ProductForm/>} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
