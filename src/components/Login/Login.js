import React from 'react';
import { Formik , Form , Field} from 'formik';
import * as Yup from 'yup';


const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('email can not be empty'),
    password: Yup.string().required('password can not be empty').min(6, 'at least 6 characters')
})

const Login = () => {
    const login = values => {
    console.log(values)
};
    return ( 
        <div >
            <h1 className='form__title'>Login</h1>
            <Formik
            initialValues={{email:"" , password:""}}     
            validationSchema={loginValidationSchema}
            onSubmit={login}
            >
                {
                   ({errors , touched}) => (
                        <Form className='input__container'>
                            <Field name='email' 
                            type='email'
                             placeholder='enter your email' 
                             className={errors.email ? 'input input-error':'input input-no-error'} 
                             autoComplete='off' />
                             <span className='error'>{errors.email && touched.email ? errors.email: null}</span>


                            <Field name='password'
                             type='password'
                              placeholder='enter password'
                               className='input'
                                autoComplete='off' />
                                <span className='error'>{errors.password && touched.password ? errors.password:null}</span>
                                <button className='submit' type='submit'>Login</button>
                        </Form>
                    )
                }
               
            </Formik>
        </div>

        

     );
}
 
export default Login;