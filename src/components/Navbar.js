import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//import Button from 'react-bootstrap/Button';
import './Navbar.css';
import {Button} from './Button';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={props.artistactivated ? "artist" :"computers"}>
                <div className='navbar'>
                    <div className= "navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/*Home! <i className='fab fa-typo3'/>*/}
                            Clara J. Kim
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click?'fas fa-times':'fas fa-bars'}/>
                        </div>
                        <ul className={click ? 'nav-menu active':'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            {/* CS LINKS */}
                            {!props.artistactivated && 
                                <li className='nav-item'>
                                    <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                        Resume
                                    </Link>
                                </li>
                            }
                            {!props.artistactivated && 
                                <li className='nav-item'>
                                    <Link to='/teaching' className='nav-links' onClick={closeMobileMenu}>
                                        Teaching
                                    </Link>
                                </li>
                            }
                            {!props.artistactivated && 
                                <li className='nav-item'>
                                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                        Projects
                                    </Link>
                                </li>
                            }
                            {/* ART LINKS */}
                            {props.artistactivated && 
                                <li className='nav-item'>
                                    <Link to='/Illustration' className='nav-links' onClick={closeMobileMenu}>
                                        Illustration
                                    </Link>
                                </li>
                            }
                            {props.artistactivated && 
                                <li className='nav-item'>
                                    <Link to='/Design' className='nav-links' onClick={closeMobileMenu}>
                                        Design
                                    </Link>
                                </li>
                            }
                        </ul>
                        {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar