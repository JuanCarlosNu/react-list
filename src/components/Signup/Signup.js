import React from 'react';
import { Formik } from 'formik';
import *as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    username: Yup.string().min(4, 'too short').required('mandatory'),
    email: Yup.string().email().required('mandatory'),
    password: Yup.string().min(6, '6characters').required('must enter one'),
});

const Signup = () => {
    const signup = () => {};
    return (
        <Formik
        initialValues={{name:"" , email: "" , password: "" }} 
        validationSchema={SignupSchema} 
        onSubmit={Signup}
        render={({values, handleChange, errors, handleSubmit})=>(
            <div>
                <h1>Signup</h1>
                <input value={values.name} onChange={handleChange} error={errors.name} name='name' type='text' placeholder='enter your name'/>
                <input value={values.email} onChange={handleChange} error={errors.email} name='email' type='text' placeholder='enter your email'/>
                <input value={values.password} onChange={handleChange} error={errors.password} name='password' type='text' placeholder='enter your password'/>
                <button onClick={handleSubmit}>Signup</button>
            </div>
        )}
        />
    );
};
 
export default Signup;
