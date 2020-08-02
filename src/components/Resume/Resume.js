import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className='resume-container'>
            <h1>Resume</h1>
            <div className='resume-doc'>
                <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://matthewdibble.com/assets/resume.pdf" width="800" height="1100"></embed>
            </div>
        </div>
    )
}

export default Resume;
