import React from 'react';


const CourseDetails = (props) => {
    console.log(props.match.params.id)
    return (  
        <div> Course Details </div>
    );
}
 
export default CourseDetails;