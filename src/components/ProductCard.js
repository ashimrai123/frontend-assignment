import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {addedToCart && <p className="added-to-cart">Added to Cart</p>}
      <a
        className="view-details btn"
        href={`/product/${product.id}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/product/${product.id}`;
        }}
      >
        View Details
      </a>
    </div>
  );
};

export default ProductCard;
