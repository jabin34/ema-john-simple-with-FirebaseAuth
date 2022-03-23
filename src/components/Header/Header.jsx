import React from 'react';
import './Header.css';
import Logo from'../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='headerNavigation'>
            <img src={Logo} alt="img"/>
            <div>
                <a href='/shop'>Shop</a>
                <a href='/orders'>Orders</a>
                <a href='/Inventory'>Inventory</a>
                <a href='/about'>About</a>
            </div>
        </nav>
    );
};

export default Header;