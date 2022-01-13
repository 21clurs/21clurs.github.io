import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src = 'images/img-8.jpg' 
                        text = 'Explore a paper forest!'
                        label = 'Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src = 'images/img-8.jpg' 
                        text = 'Explore a different paper forest!'
                        label = 'Adventure'
                        path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards