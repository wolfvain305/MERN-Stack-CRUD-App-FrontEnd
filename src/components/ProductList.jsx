import React, {useEffect, useState} from "react";
import { getProducts } from "../api";

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        //getting products from api
        getProducts()
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.error('Error fetching products:', error)
            })
    }, [])

    return (
        <div>
            <h1>Our Baking Products</h1>
            <ul>
            {products.map(product => (
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.name} width="150" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
