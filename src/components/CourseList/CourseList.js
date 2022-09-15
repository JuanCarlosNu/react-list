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
            courses
        };
    }

    render() {
     return (
      <div className='itemList'>

         <form className='search__form'>
            <input type='text' placeholder='search course' className='course__search' />
         </form>
         <div className='courses'>
             {this.state.courses.map(course =>(
             <CourseItem key={course.id} course={course} /> 
             ))}
           </div>
        </div>
     );
    }
}




//const CourseList = () => {

    
    
//} ;
 
export default CourseList;