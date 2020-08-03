import React from 'react';
import './Skills.css';

import SkillGroup from './SkillGroup/SkillGroup';

function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <SkillGroup type='Creative'>
                <p>Image Manipulation</p>
                <span>Photoshop, Lightroom, GIMP, Illustrator</span>
                <br />
                <p>Video Editing</p>
                <span>Premiere Pro, Final Cut</span>
                <br />
                <p>Compositing</p>
                <span>After Effects, Nuke</span>
                <br />
                <p>3D</p>
                <span>Maya, Cinema 4D, Houdini, Arnold</span>
            </SkillGroup>
            <SkillGroup type='Web'>
                <p>Languages</p>
                <span>HTML, CSS, JavaScript</span>
                <br />
                <p>Technologies</p>
                <span>React, Node.js, MongoDB, Express, Azure</span>
            </SkillGroup>
            <SkillGroup type='Languages'>
                <p>General-purpose</p>
                <span>C, C++, Java, Python</span>
                <br />
                <p>Scripting</p>
                <span>VBA, Google Apps Script</span>
                <br />
                <p>Other</p>
                <span>SQL</span>
            </SkillGroup>
            <SkillGroup type='Eager to Learn'>
                <p>Hardware</p>
                <span>CHIP-8, Emulation</span>
                <br />
                <p>Languages</p>
                <span>Rust, Go</span>
                <br />
                <p>Frameworks</p>
                <span>TensorFlow</span>
            </SkillGroup>
        </div>
    )
}

export default Skills;
