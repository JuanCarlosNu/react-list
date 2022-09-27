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
        render={() => (
            <div>
                <h1>Signup</h1>
               
            </div>
        )}
        />
    );
};
 
export default Signup;
