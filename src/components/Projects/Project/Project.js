import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div className='project-container'>
            <div className='project-inner'>
                <div className='project-info-left'>
                    <h1>{props.name}</h1>
                    <span>{props.tech}</span>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;