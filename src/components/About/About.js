import React from 'react';
import './About.css';
import image from '../../assets/img/portrait.png';

function About() {
    return (
        <div className='about-container'>
            <div className='about-info'>
                <h1 style={{lineHeight: '0px'}}>About</h1>
                <br />
                <p> 
                    I'm Matthew Dibble, a third-year student at Wilfrid Laurier
                    University pursuing my BBA and BSc in Computer Science,
                    expected to graduate in 2023. Technology is my biggest
                    passion, and the tech industry is I'm where I'm interested
                    in heading for my full-time career.
                </p>
                <p>
                    I've always had an
                    interest in consumer electronics, computer software, and
                    their implications on society, but more recently I've been
                    intrigued by AI and what it has to offer in the coming
                    decades. I figured a website would be a great way to talk
                    about what I'm working on, where my interests lie, or
                    anything else that pops up in my head. Feel free to
                    connect with me on LinkedIn or send me an email if you'd
                    like to get in touch.
                </p>
                <p>
                    Though I'm interested in technology, that's not all I pay
                    attention to. I love movies, music, comedy, and I'm also a big
                    fan of the Toronto Blue Jays and Miami Dolphins. I'm also fairly
                    interested in US Politics. One cause I care strongly about is
                    sustainability, and I admire companies that display an urgency
                    to adopt greener infrastructures.
                </p>                
            </div>
            <div className='img-container'>
                <img src={image} alt=''></img>
            </div>
        </div>
    )
}

export default About;