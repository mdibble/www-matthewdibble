import React, { useState } from 'react';
import ColorOption from './ColorOption/ColorOption.js';

import './ThemeSwitcher.css';

function ThemeSwitcher() {
    const [expanded, setExpanded] = useState(false);
    const [selection, setSelection] = useState();

    const handleSelection = (color) => {
        setSelection(color);
        setExpanded(false);
    }

    if (!expanded) {
        return (
            <div>
                <div className='theme-main' onClick={() => setExpanded(expanded ? false : true)}>
                    <div className='theme-main-inner' />
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='theme-picker-container'>
                <div className='theme-main' onClick={() => setExpanded(expanded ? false : true)}>
                    <div className='theme-main-inner' />
                </div>
                <ColorOption color='red' handleSelection={handleSelection}/>
                <ColorOption color='blue' handleSelection={handleSelection}/>
                <ColorOption color='green' handleSelection={handleSelection}/>
            </div>
        )
    }

    
}

export default ThemeSwitcher
