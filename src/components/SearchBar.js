import React, { useState } from 'react';
import { searchProducts } from 'C:/Users/ashim/Desktop/project_online/online_store/src/utils/api';
import 'C:/Users/ashim/Desktop/project_online/online_store/src/bar_styles.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle search suggestions
  const handleSearchSuggestions = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const data = await searchProducts(value);
      setSuggestions(data);
    }
  };

  // Function to handle suggestion click and trigger search
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]); // Clear suggestions when suggestion is clicked
    onSearch(suggestion.title); // Trigger search with the selected term
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    onSearch(searchTerm); // Trigger search with the entered term
  };

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchSuggestions}
          placeholder="Enter product name"
          className="form-control"
          list="suggestionsList" // Provide the ID of the datalist element
        />
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {/* Display autofilling dropdown suggestions */}
      {suggestions.length > 0 && (
        <ul className="list-group mt-2">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="list-group-item suggestion-item"
              onClick={() => handleSuggestionClick(product)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
