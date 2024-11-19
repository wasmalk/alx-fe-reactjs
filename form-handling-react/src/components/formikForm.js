import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Initial values for the form fields
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    alert('Registration successful!');
    resetForm(); // Clear form fields
  };

  return (
    <div>
      <h2>Register with Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: 'red', marginTop: '5px' }}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: 'red', marginTop: '5px' }}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: 'red', marginTop: '5px' }}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
