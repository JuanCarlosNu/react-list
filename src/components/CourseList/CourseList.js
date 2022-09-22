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
            courses,
            inputSearch: ''
        };
       
    }
    handleChange = event =>{
        

        this.setState(
            {
             inputSearch: event.target.value  
            });
    };

    filterCourses = () => {
    return this.state.courses
    .filter(c =>
         c.title
        .toLowerCase()
        .includes(this.state.inputSearch.toLocaleLowerCase())
        )
        .map(course => <CourseItem key={course.id} course={course}/> )
    };

    render() {
 

     return (
      <div className='itemList'>
        <form className='search__form'>
            <input 
            type='text'
             placeholder='search course' 
             className='course__search' 
             onChange={this.handleChange} 
             value={this.state.inputSearch}/>
         </form>

         <div className='courses'>
            {this.filterCourses()}    
       </div>
        </div>
     );         
    }   
}




//const CourseList = () => {

    
    
//} ;
 
export default CourseList;