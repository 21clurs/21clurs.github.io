import React from 'react';
import './MyList.css';
import MyListItem from './MyListItem';

function MyList() {
    return (
        <div className = 'ta-cards'>
            <div className='ta-cards__wrapper'>
                <ul className='ta-cards__items'>
                    <MyListItem 
                    courseID = 'CS 4810'
                    courseName = 'Intro. to Computer Graphics'
                    semesterTaught = 'Fall 2021'
                    courseSite = 'https://www.cs.virginia.edu/luther/4810/F2021/'
                    courseTopics = 'Rasterization, raytracing, simulation/animation. More details can be found in site.'
                    taDescription = 'Weekly office hours. Quiz grading & re-grading.'
                    />
                    <MyListItem 
                    courseID = 'CS 2110'
                    courseName = 'Software Development Methods'
                    semesterTaught = 'Fall 2021*, Spring 2021*, Fall 2020, Spring 2020'
                    courseTopics = 'Data structures and algorithms in Java.'
                    taDescription = 'Weekly office hours. Led weekly small group discussions. Ran lab periods. Wrote test questions. Assignment & exam grading.'
                    headTaDescription = 'Point of contact for grading and quizzes. Delegated grading of weekly assignments. Wrote & ran grading scripts. Constructed quizzes.'
                    />
                    <MyListItem 
                    courseID = 'CS 2150'
                    courseName = 'Program and Data Representations'
                    semesterTaught = 'Spring 2021, Fall 2020'
                    courseSite = 'https://uva-cs.github.io/pdr/readme.html'
                    courseTopics = 'Data structures and algorithms in C++. Intro to lower level concepts: x86 assembly and machine code.'
                    taDescription = 'Weekly office hours. Review sessions. Exam grading.'
                    />
                    <MyListItem 
                    courseID = 'APMA 3080'
                    courseName = 'Linear Algebra (Applied Math dept.)'
                    semesterTaught = 'Fall 2019'
                    courseTopics = 'Analysing systems of linear equations: vector spaces, linear dependences, bases, dimension, eigenvalues/eigenvectors, inner products, etc.'
                    taDescription = 'In-class assistance. Grading daily assignments. Review sessions.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default MyList