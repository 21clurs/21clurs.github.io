import React from 'react';
import '../../App.css';
import '../HeroSection.css';

export default function Resume() {
    return (
    <div className='hero-container'>
        <h1>Resume</h1>
        <p>
            If you would like my phone number, please email me as I'm a bit hesitant about putting it out here for anyone to see:
        </p>
        <iframe src="/docs/C_Kim_Resume_Public.pdf#toolbar=0" width="100%" height="100%"></iframe>
    </div>
    );
}