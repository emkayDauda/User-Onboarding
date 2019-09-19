import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function CustomForm(){
    return (
      <Formik
        render={props => {
          return (
            <Form>
              <div>
                <Field name="a" type="text" placeholder="Name" />
                <ErrorMessage name="a" component="div" />
              </div>
              <div>
                <Field name="b" type="text" placeholder="Email" />
                <ErrorMessage name="b" component="div" />
              </div>
              <div>
                <Field name="c" type="text" placeholder="Password" />
                <ErrorMessage name="c" component="div" />
              </div>
              <div>
                <label>
                    <Field name="d" type="checkbox" placeholder="" />
                    <ErrorMessage name="d" component="div" />
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