import React from 'react';
import courses from '../../Data/courses.json'

const courseList = () => {
    console.log(courses);

    return <div>{
    courses.map(course =><div>item</div>)
    }</div>
    
};
 
export default courseList;
