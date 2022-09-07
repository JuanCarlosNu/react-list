import React from 'react';
import courses from '../../Data/courses.json';
import CourseItem from '../CourseItem/CourseItem.js';
import  './courses.css';

const CourseList = () => {

    if (courses.length === 0) return <div className='noItems'>No Items Found</div>;

    return (
    <div className='courses'>
        {courses.map(course => <CourseItem key={course.id} course={course} /> )}
        </div>
    );
} ;
 
export default CourseList;