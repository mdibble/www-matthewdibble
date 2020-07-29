import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='header-nav'>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>About</span>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>Contact</span>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>    
                <span>Projects</span>
            </Link>
            <Link to="/resume" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>Resume</span>
            </Link>
            <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>Skills</span>
            </Link>
        </div>
    )
}

export default Nav