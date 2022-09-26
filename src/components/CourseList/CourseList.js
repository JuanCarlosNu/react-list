import React from 'react';
import lodash from 'lodash'; 

import courses from '../../Data/courses.json';
import CourseItem from '../CourseItem/CourseItem.js';
import  './courses.css';
import CourseForm from '../courseForm/courseForm';


//class based component:
class CourseList extends React.Component{
 //constructor function: this holds the mangment of the statements.
    constructor() {
        super()

        this.state = {
            courses,
            inputSearch: '',
            sortTerm: '',
            sortOrder: 'asc',

        };
       
    }
  
        
    handleInput = event =>{
        this.setState(
          { [event.target.name] : event.target.value}
          )
        }
       
    

    render() {
        const filterd = this.state.courses.filter(c =>c.title.toLowerCase().includes(this.state.inputSearch.toLocaleLowerCase()))

        const sorted = lodash.orderBy(filterd , [this.state.sortTerm], [this.state.sortOrder] ) 

     return (
      <div className='itemList'>
       <CourseForm filterd={filterd} inputSearch={this.state.inputSearch} handleInput={this.handleInput} />

         <div className='courses'>
        
            {sorted.length === 0 ? 'no items found' : sorted.map(course =>
                 <CourseItem key={course.id} course={course}/> )}    
       </div>
        </div>
     );         
    }   
}




//const CourseList = () => {

    
    
//} ;
 
export default CourseList;