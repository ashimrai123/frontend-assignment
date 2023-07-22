import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';

const queryClient = new QueryClient();

const App = () => {
  const [cartItems, setCartItems] = useState([]); // State to hold the cart items

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router addToCart={addToCart} cartItems={cartItems} />
    </QueryClientProvider>
  );
};

export default App;
