import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { LoginUserAction } from '../../redux/Auth/auth.action';
import { Route,Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const initialValues = { email: '', password: '' };
const validationSchema = {
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
};

const Login = () => {
  const [formValue,setFormValue]=useState();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit = (values) => {
    console.log('Form Values', values);
    dispatch(LoginUserAction({data:values}));
  };

  return (
    <>
    <Formik
      onSubmit={handleSubmit}
     // validationSchema={validationSchema}
      initialValues={initialValues}
    >
      
        <Form className="space-y-4">
          <div className="space-y-4">
            <div style={{ marginBottom: '0.8rem' }}>
             
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
            <div style={{ marginBottom: '0.8rem' }}>
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
              Login
            </Button>
          </div>
        </Form>
    </Formik>
    <div className="flex gap-2 align items-center justify-center pt-5">
      <p>If you don't have an account please </p>
      <Button onClick={()=>navigate("/register")}>Sign Up</Button> 
      
    </div>
    </>
  );
};

export default Login;





