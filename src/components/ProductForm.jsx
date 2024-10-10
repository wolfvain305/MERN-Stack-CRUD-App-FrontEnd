import React, {useState} from "react";
import { createProduct } from "../api";

const ProductForm = () => {
    const [formData, setFormData] = useState ({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.tartget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // using api to create product
        createProduct(formData)
        .then(response => {
            console.log('Product created:', response.data)
            //Clearing the form
            setFormData({
                name: '',
            description: '',
            price: '',
            category: '',
            imageUrl: ''
            })
        })
        .catch(error => {
            console.error('Error creating product:', error)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div>
                <label>Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default ProductForm