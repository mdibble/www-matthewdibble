import React from 'react';
import './Footer.css';

import Flow from './Flow/Flow';
import Nav from '../Header/Nav/Nav';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='flow-container'>
                <Flow offsetY='0px'/>
                <Flow offsetY='10px'/>
                <Flow offsetY='20px'/>
            </div>
            <div className='inner-footer'>
                <a href='https://github.com/mdibble/www-matthewdibble' target="_blank" rel="noopener noreferrer">View Source</a>
                <div className='footer-right'>
                    <div className='socials'>
                        <a href='https://github.com/mdibble/' target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href='https://www.linkedin.com/in/matthew-b-dibble/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <span style={{color:'#ffffff80'}}>/</span>
                    <Nav />
                </div>
            </div>
        </div>
    )
};

export default Footer;
