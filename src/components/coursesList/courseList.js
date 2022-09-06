import React from 'react';
import courses from '../../Data/courses.json';
import  './courses.css';

const CourseList = () => {
    console.log(courses)

    return <div className='courses'>{
        courses.map(course => <div key={course.id} className='course'>
            <div className='img_container'> 
            <img className='course_img' src={course.courseImage} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
            <span>{course.author}</span>
            <span>{course.price}</span>
        </div>)
        }</div> ;
}
 
export default CourseList;