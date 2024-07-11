// Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './products.css'; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://example.com/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="products-container">
        <h1>Products</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="products-list">
            {products.map(product => (
              <li key={product.id} className="product-item">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
};

export default Products;