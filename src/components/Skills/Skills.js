import React from 'react';
import './Skills.css';

import SkillGroup from './SkillGroup/SkillGroup';

function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <SkillGroup type='Creative'>
                <p>Image Manipulation</p>
                <span>Photoshop</span>
                <span>Lightroom</span>
                <span>GIMP</span>
                <span>Illustrator</span>
                <br />
                <p>Video Editing</p>
                <span>Premiere Pro</span>
                <span>Final Cut</span>
                <br />
                <p>Compositing</p>
                <span>After Effects</span>
                <span>Nuke</span>
                <br />
                <p>3D</p>
                <span>Maya</span>
                <span>Cinema 4D</span>
                <span>Houdini</span>
                <span>Arnold</span>
            </SkillGroup>
            <SkillGroup type='Web'>
                <p>Languages</p>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <br />
                <p>Technologies</p>
                <span>React</span>
                <span>Node</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Azure</span>
            </SkillGroup>
            <SkillGroup type='Languages'>
                <p>General-purpose</p>
                <span>C</span>
                <span>C++</span>
                <span>Java</span>
                <span>Python</span>
                <br />
                <p>Scripting</p>
                <span>VBA</span>
                <span>Google Apps Script</span>
                <br />
                <p>Other</p>
                <span>SQL</span>
            </SkillGroup>
            <SkillGroup type='Eager to Learn'>
                <p>Hardware</p>
                <span>CHIP-8</span>
                <span>Emulation</span>
                <br />
                <p>Languages</p>
                <span>Rust</span>
                <span>Go</span>
                <br />
                <p>Frameworks</p>
                <span>TensorFlow</span>
            </SkillGroup>
        </div>
    )
}

export default Skills;
