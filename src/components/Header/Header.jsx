import React from 'react';
import './Header.css';
import Logo from'../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='headerNavigation'>
            <img src={Logo} alt="img"/>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/product">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
              
            </div>
        </nav>
    );
};

export default Header;