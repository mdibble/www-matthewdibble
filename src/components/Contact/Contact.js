import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <p>
                Please feel free to reach out to me through any of these
                channels:
            </p>
            <ul>
                <li>Phone: (705) 770-9989</li>
                <li>Personal email: mdibble [at] rogers [dot] com</li>
                <li>School email: dibb0820 [at] mylaurier [dot] ca</li>
            </ul>
            <p>
                Or connect with me on <a href='https://www.linkedin.com/in/matthew-b-dibble/'>LinkedIn</a>!
            </p>
        </div>
    )
}

export default Contact;
