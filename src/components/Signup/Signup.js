import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../input/input';
import '../input/input.css'

const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "user name can not be less than 4")
      .required("name can not be empty"),
    email: Yup.string()
      .email()
      .required("email can not be empty"),
    password: Yup.string()
      .min(6, "password can not be less than 6")
      .required("password can not be empty")
  });

const Signup = () => {
    const signup = values => {
        console.log(values);
    };
    
    return (
        <Formik
        initialValues={{name:"" , email: "" , password: "" }} 
        validationSchema={signupSchema} 
        onSubmit={signup}
        render={({values, handleChange, errors, handleSubmit})=>(
            <div>
                <h1 className='form__title'>Signup</h1>
                <Input 
                value={values.name} 
                onChange={handleChange}
                error={errors.name} 
                name="name" 
                type="text" 
                placeholder="enter your name"
                />
                <Input 
                value={values.email} 
                onChange={handleChange} 
                error={errors.email} 
                name="email" 
                type="text" 
                placeholder="enter your email"
                />
                <Input 
                value={values.password} 
                onChange={handleChange} 
                error={errors.password} 
                name="password"
                type="text" 
                placeholder="enter your password"
                />
                <button className='submit' onClick={handleSubmit}>Signup</button>
            </div>
        )} 
        />
    );
};
 
export default Signup;
