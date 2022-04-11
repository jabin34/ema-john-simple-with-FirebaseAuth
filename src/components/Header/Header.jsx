import React from 'react';
import './Header.css';
import Logo from'../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='headerNavigation'>
            <img src={Logo} alt="img"/>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/product">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            
                {
                    user&& <button onClick={handleSignOut}>  Sign Out</button>
                }
                 
            </div>
        </nav>
    );
};

export default Header;