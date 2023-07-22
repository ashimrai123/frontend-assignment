import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from 'C:/Users/ashim/Desktop/project_online/online_store/src/utils/api';
import ProductCard from 'C:/Users/ashim/Desktop/project_online/online_store/src/components/ProductCard';
import SearchBar from 'C:/Users/ashim/Desktop/project_online/online_store/src/components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = ({ addToCart }) => {
  const { data: products, isLoading, isError } = useQuery('products', fetchProducts);
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => navigate('/cart')}>
          Go to Cart
        </button>
      </div>
      <h1 className="text-center mb-4">Home Page</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="row">
        {searchResults
          ? searchResults.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))
          : products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
