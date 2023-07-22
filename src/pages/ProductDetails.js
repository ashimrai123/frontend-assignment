import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from 'C:/Users/ashim/Desktop/project_online/online_store/src/utils/api';
import { Link } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['product', id], () => fetchProduct(id));

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(data);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details.</div>;
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-center mb-0">Product Details</h1>
        <Link to="/cart" className="btn btn-primary">
          Go to Cart
        </Link>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={data.image} alt={data.title} className="img-fluid mb-3" />
        </div>
        <div className="col-md-6">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {addedToCart && <p className="added-to-cart">Added to Cart</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
