import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <div className='not-found-container'>
            <div className='not-found-message'>
                <h1>Error 404</h1>
                <span>Nothing was found at this address.</span>
            </div>
        </div>
    )
}

export default NotFound;