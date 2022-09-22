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

    
    
       
    

    render() {
        const filterd = this.state.courses.filter(c =>c.title.toLowerCase().includes(this.state.inputSearch.toLocaleLowerCase()))

     return (
      <div className='itemList'>
        <form className='search__form'>
            <input 
            type='text'
             placeholder='search course' 
             className={filterd.length === 0 ? 'course__search not-items-input' : 'course__search items-found-input'} 
             onChange={this.handleChange} 
             value={this.state.inputSearch}/>
         </form>
         <select>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="student">Student</option>
         </select>
         <select>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
         </select>

         <div className='courses'>
            {filterd.length === 0 ? 'no items found' : filterd.map(course => <CourseItem key={course.id} course={course}/> )}    
       </div>
        </div>
     );         
    }   
}




//const CourseList = () => {

    
    
//} ;
 
export default CourseList;