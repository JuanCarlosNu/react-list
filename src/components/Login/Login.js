import React from 'react';
import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('email can not be empty'),
    password: Yup.string().required('password can not be empty').min(6, 'at least 6 characters')
})

const Login = () => {
    return ( 
        <div>Login</div>

     );
}
 
export default Login;