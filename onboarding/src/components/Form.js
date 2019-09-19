import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function CustomForm(){

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required('Name is required'),
        email: yup.string()
            .required('Email is required'),
        password: yup.string()
            .required('password is required'),
        terms: yup.boolean()
            .required()
            .isType(true)
            
    })

    return (
      <Formik
      validationSchema={validationSchema}
        render={props => {
          return (
            <Form>
              <div>
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <Field name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field name="password" type="text" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <label>
                    <Field name="terms" type="checkbox" placeholder="" />
                    <ErrorMessage name="terms" component="div" />
                    Read and accepted terms of service.
                </label>
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    );
}