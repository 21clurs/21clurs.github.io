import React from 'react';
import './SideSection.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';

function SideSection(props){
    const handleArtistClick = () => props.setArtistactivated(true);
    const handleUnArtistClick = () => props.setArtistactivated(false);
    return (
        <div className={props.artistactivated ?'side-container-artist': 'side-container-normal'}>
            <div className='side-container'>
                <div className='picture-container'>
                    <img src="/images/self.jpg" alt="A picture of me!"/>
                </div>
                <h1>Clara J. Kim</h1>
                <p>I'm a computer scientist and amateur artist currently based in Virginia. You can learn more about me <Link to='/'>here</Link>.</p>
                <div className="btns">
                    {props.artistactivated && <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'onClick={handleUnArtistClick}>
                        Switch to Computer Scientist
                    </Button>}
                    {!props.artistactivated && <Button className='btns' buttonStyle='btn--primarydark' buttonSize='btn--large' onClick={handleArtistClick}>
                        Switch to Artist
                    </Button>}
                </div>
                <h2>Contact</h2>
                <div className='email-line'>
                    {/*<h2>Email:</h2>*/} <p>{props.artistactivated ? 'clarinking [.] draws [@] gmail [.] com':'cjk8ad [@] virginia [.] edu'}</p>
                </div>
                <section className='ss-social-media'>
                    {!props.artistactivated && 
                    <div className="ss-social-icons">
                        <a className="ss-social-icon-link github" href='https://github.com/21clurs/' target='_blank' aria-label='Github'>
                            <i className='fab fa-github'></i>
                        </a>
                        <a className="ss-social-icon-link linkedin" href='https://www.linkedin.com/in/clara-kim-0568a9177/' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        {/*<a className="ss-social-icon-link email" href='mailto:cjk8ad@virginia.edu' target='_blank' aria-label='Email'>
                            <i className='fab fa-envelope'></i>    
                        </a>*/}
                    </div>
                    }  
                    {props.artistactivated && 
                    <div className="ss-social-icons">
                        <a className="ss-social-icon-link instagram" href='https://instagram.com/clarinking' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a className="ss-social-icon-link inprnt" href='https://www.inprnt.com/profile/clarinking/' target='_blank' aria-label='inPRNT'>
                            <i className='inprnt-icon'></i>
                        </a>
                    </div>
                    }      
                </section>
            </div>
        </div>
    )
}

export default SideSection