import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems }) => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <div className="text-end mb-3">
        <Link to="/cart">Go to Cart</Link> {/* Move the link to the top-right corner */}
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
