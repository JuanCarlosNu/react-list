import React from 'react';
import {Formik} from 'formik';
import *as Yup from 'yup';

const singupShema = Yup.object.shape({
    username: Yup.string().min(4, 'too short').required('mandatory'),
    email: Yup.string().email().required('required'),
    password: Yup.string().min(6, 'at least 6 characters').required('mandatory to enter one')
    
})

const Signup = () => {
    return 
       <Formik  
       initialValues={ {name: "", email:"", password:""}}
       validationSchema={singupShema}
       onSubmit={this.Signup}
       render={() =>(
        <div>
            <h1>Signup</h1>
        </div>
       )

       }     
       />;
      
};
 
export default Signup;