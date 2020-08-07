import React from 'react';
import './Projects.css';
import Project from './Project/Project';

function Projects() {
    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <p style={{paddingBottom: '20px'}}>
                The source to all of these projects can be found on my <a href='https://github.com/mdibble/' style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            <div className='projects'>
            <Project 
                    name='CHIP-8 Emulator'
                    tech='Rust / SDL2'
                    desc=   "An emulator of the CHIP-8
                            instruction set, an architecture that was
                            interpreted on many personal computers
                            throughout the 1970s-80s. I learned
                             a lot about low-level computing,
                            and this got me significantly more interested in
                            the field. This was also my introduction into
                            Rust."    
                />
                <Project 
                    name='2020 US Election Poll Aggregator'
                    tech='Node / Mongo / Express / React'
                    desc=   "One of my bigger interests outside of
                            tech is politics, especially in the
                            United States. I built this full-stack
                            web-app that allows users to input polls
                            and displays how each state is swinging
                            based on the most recent information. It
                            includes a RESTful API."    
                />
                <Project 
                    name='Super Mario Bros. Level 1-1'
                    tech='C++ / SDL2'
                    desc=   "A game that
                            can play the first level of Super Mario
                            Bros. I thought this
                            would be a fun project as it's more on
                            the visual side of things. It also
                            provides as a stepping stone to more
                            complicated graphics APIs such as OpenGL."    
                />
                <Project 
                    name='Chess in the Terminal'
                    tech='C++'
                    desc=   "It's about as simple as it sounds. I build a
                            version of chess that's designed to be played
                            in the terminal, and includes full game rules.
                            This includes en passant, castling, and pawn 
                            promotion. I would eventually like to make it so
                            users can play against a chess engine."   
                />
                <Project 
                    name='Personal Website'
                    tech='React'
                    desc=   "The current website you're on right now! I built this
                            as a way to become more familiar with frameworks
                            like React as well as frontend web development in
                            general. All the styling was done from scratch, which
                            was an undertaking but has paid off hugely."    
                />
            </div>
        </div>
    )
}

export default Projects;
