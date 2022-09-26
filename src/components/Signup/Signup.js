import React from 'react';
import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
    username: Yup.string().min(4, 'too short').required('mandatory'),
    emal: Yup.string().email().required('madatory'),
    password: Yup.string().min(6, '6 character are requ').required('mandatory')
})
const Signup = () => {
    return ( 
      <div><h1>signup</h1></div>
     );
}
 
export default Signup;
<div>
    <h1>Signup</h1>
</div>