import React from 'react';

const CourseForm = ({handleInput, inputSearch , filterd}) => {

    return (  
        <form className='search__form'>
        <input 
        type='text'
         placeholder='search course'
         name='inputSearch' 
         className={filterd.length === 0 ? 'course__search not-items-input' : 'course__search items-found-input'} 
         onChange={handleInput} 
         value={inputSearch}/>
     
     <select name='sortTerm' className='sort__input' onChange={handleInput}>
        <option>Select item</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="student">Student</option>
     </select>
     <select name='sortOrder' className='order__input' onChange={handleInput}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
     </select>
     </form>
            );
}
 
export default CourseForm;

