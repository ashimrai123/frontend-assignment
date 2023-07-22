import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/';

// Function to fetch all products from the API
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}products`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

// Function to fetch a single product by ID from the API
export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product details');
  }
};

// Function to fetch products based on the search term from the API
export const searchProducts = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_URL}products`);
    const filteredProducts = response.data.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredProducts;
  } catch (error) {
    throw new Error('Error searching for products');
  }
};
