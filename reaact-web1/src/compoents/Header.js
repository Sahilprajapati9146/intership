import React from 'react';
import { Link } from 'react-router-dom';
import  "./header.css"

const Header = () => {
  return (
    <header>
      

      <nav>
        <ul class='flex'>
          <li >
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;