import React from 'react';
import {Link} from 'react-router-dom';

function MyListItem(props) {
    return (
        <>
            <li className='ta-cards__item'>
                <section className='ta-cards__item__header'>
                    <h1>{props.courseID} - {props.courseName}</h1>
                </section>
                <div className='ta-cards__item__details'>
                <table>
                    <tr>
                        <td><i>Semester(s):</i></td>
                        <td>{props.semesterTaught}</td>
                    </tr>
                    {props.courseSite && <tr>
                        <td><i>Course Site:</i></td>
                        <td><a href={props.courseSite} target='_blank'>{props.courseSite}</a></td>
                    </tr>}
                    <tr>
                        <td><i>Topics:</i></td>
                        <td>{props.courseTopics}</td>
                    </tr>
                    <tr>
                        <td><i>Duties:</i></td>
                        <td>{props.taDescription}</td>
                    </tr>
                    {props.headTaDescription && <tr>
                        <td><i>*Head TA:</i></td>
                        <td>{props.headTaDescription}</td>
                    </tr>}
                </table>
                
                    
                </div>
                {/*<Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-categorie={props.label}>
                        <img src={props.src} alt='Travel Image' className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>*/}
            </li>
        </>
    )
}

export default MyListItem