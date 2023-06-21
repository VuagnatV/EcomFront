import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> ECOM </h1>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link">Orders</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;