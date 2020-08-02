import React from 'react';
import './SkillGroup.css';

function SkillGroup(props) {
    return (
        <div className='skillgroup-container'>
            <div className='skillgroup-inner'>
                <h2>{props.type}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default SkillGroup;
