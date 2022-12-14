import React from 'react';
import courses from '../../Data/courses.json';
import './CourseDetails.css'

const CourseDetails = (props) => {
    const courseID = props.match.params.id;
    const course = courses.find(c =>c.id === Number(courseID) );

     return (  
        <div className='course__details'>
            <div className='image__container--d'>
                <img 
                 className='course__img--d'
                 src={course.courseImage} 
                 alt={course.title} 
                 />
             </div>

            <div className='course__content--d'>
                
              <span className={course.isHot ? 'course__status--d' : ''}>
                {course.isHot ? "Hot" : null}
             </span>

                <h3 className='course__title--d'>{course.title}</h3>
                <p className='course__desc--d'>{course.desc}</p>
                <span className='course__price--d'>{course.price}</span>
                <div className='catigories--d'>
                {course.catigories.map(cat =>(
                 <p>{cat}</p>
                 ))}
                 </div>

                <p>{course.student}</p>
                <p>{course.publishedDate}</p>
           </div>
        </div>
        );
    };
 
export default CourseDetails; 