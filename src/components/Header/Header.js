import React from 'react';
import './Header.css';

import Nav from './Nav/Nav';

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='inner-header'>
                    <div className='header-title'>
                        <span>Matthew Dibble</span>
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
