import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchProducts } from 'C:/Users/ashim/Desktop/project_online/online_store/src/utils/api';
import ProductCard from 'C:/Users/ashim/Desktop/project_online/online_store/src/components/ProductCard';
import SearchBar from 'C:/Users/ashim/Desktop/project_online/online_store/src/components/SearchBar';

const Search = ({ addToCart }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const { data: searchResults, isLoading, isError } = useQuery(
    ['search', searchQuery],
    () => searchProducts(searchQuery),
    { enabled: !!searchQuery }
  );
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchTerm(searchQuery || '');
  }, [searchQuery]);

  const handleSearch = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-center mb-0">Search Page</h1>
        <Link to="/cart" className="btn btn-primary">
          Go to Cart
        </Link>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-4">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        </div>
      </div>
      <div className="row">
        {searchResults.length === 0 ? (
          <div className="col-md-12">No products found for "{searchQuery}"</div>
        ) : (
          searchResults.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
