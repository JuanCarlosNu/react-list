import React from 'react';
import courses from '../../Data/courses.json';


const CourseDetails = (props) => {
    const courseID = props.match.params.id;
    const course = courses.find(c =>c.id === Number(courseID) )
    console.log(course)
    
    return (  
        <div> Course Details </div>
    );
}
 
export default CourseDetails; 