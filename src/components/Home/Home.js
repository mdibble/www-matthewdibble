import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='home-message'>
                <h1>Matthew Dibble</h1>
                <p>Business and computer science student</p>
                <Link to="/about">
                    <button>Learn More</button>
                </Link>
                <Link to="/contact">
                    <button>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
