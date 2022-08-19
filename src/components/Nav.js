import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Nav.css';
import login from '../images/login.png';

const Nav = () => {
  const navStyle = {
    color: '#9e9ea7',
    textDecoration: 'none',
    cursor: 'pointer',
  };
  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h1 className="flex-left">BookStore</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/books">
          <li>Books</li>
        </Link>
        <Link to="/categories" style={navStyle}>
          <li>Categories</li>
        </Link>
      </ul>
      <div className="login">
        <Link to="/" style={navStyle}>
          <img src={login} alt="Book. logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
