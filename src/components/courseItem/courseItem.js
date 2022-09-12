import React from 'react';
import { Link } from 'react-router-dom';
import './CourseItem.css'


const CourseItem = ({course}) => {
    
    return ( 
        <div  className='course'>
            <div className='img_container'> 
            <img 
            className='course_img' 
            src={course.courseImage} 
            alt={course.title} 
            />
            </div>

           <Link to={`/courses/${course.id}`}>
           <h3 className='course__title m-left' >{course.title}</h3>
           </Link>
            <span className='course__author m-left' >{course.author}</span>
            <div className='course__price'>
            <span className='price__number'>{course.price}</span>
            <span c>$</span>
            </div>
            <span className={course.isHot ? 'course__status' : ''}>{course.isHot ? 'Hot' : null}</span>
        </div>
     );
}
 
export default CourseItem;