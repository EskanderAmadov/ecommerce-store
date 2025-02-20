import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import SearchBar from '../components/SearchBar';

const HomePage = ({ addToCart }) => { 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                const data = await response.json();
                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                    setFilteredProducts(data.data.slice(0, 8)); 
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleSearch = (query) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered.slice(0, 8)); 
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Welcome to Our Store</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} addToCart={addToCart} /> 
                    ))
                ) : (
                    <p className="text-center">No products found</p>
                )}
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline-primary" onClick={() => navigate('/all-products')}>
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default HomePage;
