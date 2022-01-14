import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import MyList from '../MyList';

export default function Teaching() {
    return (
    <div className='hero-container'>
        <h1>Teaching</h1>
        <p>
            Teaching is pretty cool. I've been lucky enough to be a teaching assistant for a few classes at UVA.
            Here's a list in a vaguely backwards chronological manner:
        </p>
        <MyList />
    </div>
    );
}