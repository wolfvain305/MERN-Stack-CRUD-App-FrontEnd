import axios from 'axios'

const API_URL = 'http://http://localhost:3000'

export const getProducts = async () => {
    return await axios.get(`${API_URL/products}`)
}

export const createProduct = async (productData) => {
    return await axios.post(`${API_URL}/products`, productData)
}