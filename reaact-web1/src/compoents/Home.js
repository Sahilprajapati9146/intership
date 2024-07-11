
import React from 'react';
import Header from './Header.js';
import './home.css'; 

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Welcome to our e-commerce website!</h1>
        <p>Browse our products and start shopping today!</p>
        <button className="btn-cta">Start Shopping</button>
        <div className="home-features">
          <div className="feature">
            <i className="fas fa-truck"></i>
            <h2>Fast Shipping</h2>
            <p>Get your products delivered quickly and efficiently</p>
          </div>
          <div className="feature">
            <i className="fas fa-lock"></i>
            <h2>Secure Payment</h2>
            <p>Our payment system is secure and trusted</p>
          </div>
          <div className="feature">
            <i className="fas fa-headphones"></i>
            <h2>Customer Support</h2>
            <p>We're here to help you with any questions or concerns</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;