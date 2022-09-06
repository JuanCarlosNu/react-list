import React from 'react';
import courses from '../../Data/courses.json';
import courseItem from '../courseItem/courseItem';
import  './courses.css';

const CourseList = () => {

    return (<div className='courses'>{
        courses.map(course => <courseItem key={course.id} course={course} /> )}
        </div>
    );
} ;
 
export default CourseList;