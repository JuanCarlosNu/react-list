import React from 'react';
import * as Yup from 'yup';

const singupShema = Yup.object().shape({
    username: Yup.string().min(4, 'too short').required('mandatory'),
    email: Yup.string().email().required('required'),
    password: Yup.string().min(6, 'at least 6 characters').required('mandatory to enter one')
    
})

const Signup = () => {
    return (
        <div>Signup</div>
      );
}
 
export default Signup;