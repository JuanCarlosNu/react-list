import React from 'react';
import courses from '../../Data/courses.json';
import CourseItem from '../CourseItem/CourseItem.js';
import  './courses.css';

//class based component:

class CourseList extends React.Component{

    render(){
    if (courses.length === 0)
     return <div className='noItems'>No Items Found</div>;

    return (
    <div className='courses'>
        {courses.map(course =>(
             <CourseItem key={course.id} course={course} /> 
            ))}
        </div>
        );
    }
}




const CourseList = () => {

    
    
} ;
 
export default CourseList;