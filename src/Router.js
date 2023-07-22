import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage'; // Import the CartPage component

const AppRouter = ({ addToCart, cartItems }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/search" element={<Search addToCart={addToCart} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} /> {/* Add route for CartPage */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
