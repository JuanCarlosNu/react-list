import React from 'react';
import lodash from 'lodash'; 

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
        <form className='search__form'>
            <input 
            type='text'
             placeholder='search course'
             name='inputSearch' 
             className={filterd.length === 0 ? 'course__search not-items-input' : 'course__search items-found-input'} 
             onChange={this.handleInput} 
             value={this.state.inputSearch}/>
         
         <select name='sortTerm' className='sort__input' onChange={this.handleInput}>
            <option>Select item</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="student">Student</option>
         </select>
         <select name='sortOrder' className='order__input' onChange={this.handleInput}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
         </select>
         </form>

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