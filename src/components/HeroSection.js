import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom';

function HeroSection(props) {
    const handleArtistClick = () => props.setArtistactivated(true);
    const handleUnArtistClick = () => props.setArtistactivated(false);
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <h1>Title</h1>
            <p>Text</p>
            <p>More Text</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'onClick={handleUnArtistClick}>
                    DAY
                </Button>
                <br></br>
                <Button className='btns' buttonStyle='btn--primarydark' buttonSize='btn--large' onClick={handleArtistClick}>
                    NIGHT
                </Button>
            </div>
        </div>
    )
}

export default HeroSection