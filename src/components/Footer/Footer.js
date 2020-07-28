import React from 'react';
import './Footer.css';

import Flow from './Flow/Flow';
import Nav from '../Header/Nav/Nav';

function Footer() {
    return (
        <div className='footer-container'>
            <Flow offsetY='0px'/>
            <Flow offsetY='10px'/>
            <Flow offsetY='20px'/>
            <div className='inner-footer'>
                <span>View Source</span>
                <div className='footer-right'>
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                    <span style={{color:'#ffffff80'}}>/</span>
                    <Nav />
                </div>
            </div>
        </div>
    )
};

export default Footer;
