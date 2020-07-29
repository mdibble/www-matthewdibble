import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='inner-header'>
                    <div className='header-title'>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span>Matthew Dibble</span>
                        </Link>
                    </div>
                    <div className='header-nav-items'>
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
