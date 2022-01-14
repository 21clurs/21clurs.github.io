import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom'
import './Footer.css';

function Footer(){
    return (
        <div className='footer-container'>
            <p className='footer-subscription-heading'>
                This is a footer!
            </p>
        </div>
    )
}

export default Footer