import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-section'>
            <img src={logo} alt="" />
            <div className='navbar'>
                <a href="/home">Home</a>
                <a href="/order-review">Order review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;