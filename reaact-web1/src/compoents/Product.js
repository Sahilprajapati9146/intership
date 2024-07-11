import React from 'react';
import { useState,useEffect } from 'react';
import Header from './Header.js';

const Product = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://example.com/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [productId]);

  return (
    <>
    <Header />
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
    </>
  );
};

export default Product;