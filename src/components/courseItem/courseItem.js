import React from 'react';


const courseItem = ({course}) => {
    return ( 
        <div  className='course'>
            <div className='img_container'> 
            <img className='course_img' src={course.courseImage} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
            <span>{course.author}</span>
            <span>{course.price}</span>
        </div>
     );
}
 
export default courseItem;