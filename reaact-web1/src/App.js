import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './compoents/Header.js';
import Home from './compoents/Home.js';
import Products from './compoents/Products.js';
import Product from './compoents/Product.js';
import Cart from './compoents/Cart.js';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" exact element={<Header/> } />
        <Route path="home" exact element={<Home/> } /> 
        <Route path="products" element={<Products />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;