import React from 'react';

import './ColorOption.css';

function ColorOption(props) {
    return (
        <div className='theme-color-button' onClick={() => props.handleSelection(props.color)}>
            <div className='color-button-inner' style={{backgroundColor: props.color}}/>
        </div>
    )
}

export default ColorOption;
