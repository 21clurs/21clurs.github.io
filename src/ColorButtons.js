import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function ColorButtons(){
    const [color, setColor] = useState(''); //color is our variable, setColor is a function that we can use to change color
    return(
        <div style={{backgroundColor:color}}>
            <Button variant='secondary' onClick={() => setColor('pink')}>Pink</Button>{' '}
            <Button variant='secondary' onClick={() => setColor('green')}>Green</Button>{' '}
            <Button variant='secondary' onClick={() => setColor('teal')}>Teal</Button>{' '}
            <Button variant='secondary' onClick={() => setColor('blue')}>Blue</Button>{' '}
            <Button variant='secondary' onClick={() => setColor('white')}>Reset</Button>{' '}
        </div>
    );
}