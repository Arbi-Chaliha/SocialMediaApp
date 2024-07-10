import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { LoginUserAction } from '../../redux/Auth/auth.action';

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
  const handleSubmit = (values) => {
    console.log('Form Values', values);
    dispatch(LoginUserAction({data:values}));
  };

  return (
    <Formik
      onSubmit={handleSubmit}
     // validationSchema={validationSchema}
      initialValues={initialValues}
    >
      
        <Form className="space-y-5">
          <div className="space-y-5">
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
              Login
            </Button>
          </div>
        </Form>
    </Formik>
  );
};

export default Login;





