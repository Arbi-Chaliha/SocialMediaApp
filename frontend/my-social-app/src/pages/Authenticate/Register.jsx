import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../redux/Auth/auth.action';

const initialValues = {firstName: '', lastName: '', email: '', password: '' };
const validationSchema = {
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
}
const Register = () => {
  const [formValue,setFormValue]=useState();
  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    console.log('Form Values', values);
    dispatch(registerUserAction({data:values}));
  };

  return (
    <Formik
      onSubmit={handleSubmit}
     //validationSchema={validationSchema}
      initialValues={initialValues}
    >
      
        <Form className="space-y-5">
          <div className="space-y-5">

          <div>
              <Field
                as={TextField}
                name="firstName"
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500" />
            </div>




            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <Button
              sx={{ padding: '.8rem 0rem' }}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </Form>
    </Formik>
  );
};

export default Register;







