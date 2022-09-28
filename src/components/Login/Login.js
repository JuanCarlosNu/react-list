import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('email can not be empty'),
    password: Yup.string().required('password can not be empty').min(6, 'at least 6 characters')
})

const Login = () => {
    const login = () => {}
    return ( 
        <div >
            <h1 className='form__title'>Login</h1>
            <Formik
            initialValues={{email:"" , password:""}}     
            validationSchema={loginValidationSchema}
            onSubmit={Login}
            >

            </Formik>
        </div>

        

     );
}
 
export default Login;