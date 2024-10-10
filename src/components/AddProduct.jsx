import React, {useState} from "react";
import axiosInstance from "../Authentication/axioxInstance";
import { useNavigate } from "react-router-dom";

//Admin only

const AddProduct = () => {
    const [productData, setProductData] = useState ({
        name: '',
        description: '',
        price: '0',
        category: '',
        imageUrl: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axiosInstance.post('/products', productData)
            navigate('/')
        } catch (error) {
            console.error('Failed to add product:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Add Baking Product</h2>
            <input value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} placeholder="Product Name" />
            <textarea value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} placeholder="Product Description"></textarea>
            <input value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} placeholder="Product Price" type="number" />
            <input value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })} placeholder="Category" />
            <input value={productData.imageUrl} onChange={(e) => setProductData({ ...productData, imageUrl: e.target.value })} placeholder="Image URL" />
            <button type="submit">Add Product</button>
        </form>
    )
}

export default AddProduct