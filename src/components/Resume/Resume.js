import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className='resume-container'>
            <h1>Resume</h1>
            <div className='resume-doc'>
                <iframe title='resume' src="https://drive.google.com/file/d/1N1WpSYmERFEEQlsGx0WSW3hRNUT8hmSJ/preview" width="800" height="1100"></iframe>
            </div>
        </div>
    )
}

export default Resume;