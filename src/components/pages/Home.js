import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import {Button} from '../Button';

function Home (props) {
    return (
        <div className='hero-container'>
            <h1>Good Morning!</h1>
            <p>
                Hi! I'm Clara. I'm a student at the University of Virginia (UVA) planning on graduating in May 2022.
                I study computer science with a minor in <a href='https://engineering.virginia.edu/departments/engineering-and-society/academics/applied-math' target='_blank'>applied math</a>.
                I think computer graphics is really neat, and as of late I have had the fortune to research physics-based simulation with Professor <a href="https://engineering.virginia.edu/faculty/luther-tychonievich" target='_blank'>Luther Tychonievich</a>. 
                I'm hoping to continue researching computer graphics after I graduate, but who knows what the future holds.
            </p>
            <p>
                When I'm not coding, I can usually be found drawing-- switch over to the artist side of this site if you're curious.
                I also like to <a href='https://goodreads.com/21clurs' target='_blank'>read</a>, longboard, and play a few instruments (ukulele, viola, piano, in that order) in my free time.
                I love animated movies and musicals, and am (consequentially) partial to animated movie musicals.
            </p>
            <p>
                I made this website because I wanted to learn React and I like talking about myself.
                The source code can be found <a href='https://github.com/21clurs/21clurs.github.io' target='_blank'>here</a>. 
                Thanks for stopping by!
            </p>
        </div>
    )
}

export default Home;