import React from 'react';
import courses from '../../Data/courses.json'

const CourseList = () => {
    console.log(courses)

    return <div>{
        courses.map(course => <div key={course.id}>item</div>)
        }</div> ;
}
 
export default CourseList;