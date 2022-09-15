import React from 'react';
import courses from '../../Data/courses.json';
import CourseItem from '../CourseItem/CourseItem.js';
import  './courses.css';
//class based component:
class CourseList extends React.Component{
//constructor function: this holds the mangment of the statements.
    constructor() {
        super()

        this.state = {
            courses: courses
        }
    }

    render(){
    if (this.state.courses.length === 0)
     return <div className='noItems'>No Items Found</div>;

    return (
    <div className='courses'>
        {this.state.courses.map(course =>
             <CourseItem key={course.id} course={course} /> 
            )}
        </div>
        );
    }
}




//const CourseList = () => {

    
    
//} ;
 
export default CourseList;