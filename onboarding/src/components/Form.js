import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required("Email is required").email('Enter a valid email'),
  password: yup.string().required("password is required"),
  terms: yup
    .boolean()
    .required()
});



const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "Supply a Name!!!";
  }

  if (!formValues.password) {
    errors.password = "Enter Password";
  }

  if (!formValues.email) {
    errors.email = "Email is required";
  }

  if (!formValues.terms){
      errors.terms = "Please read and accept terms"
  }

  return errors;
};

const initialForm = {
  name: "",
  email: "",
  password: "",
  terms: false
};
export default function CustomForm() {
  return (
    <Formik
      validationSchema={validationSchema}
      validate={validate}
      initialValues={initialForm}
      onSubmit={0}
      render={props => {
        return (
          <Form>
               {
              !props.dirty && <div>time to start typing!!</div>
            }
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
                <Field name="terms" type="checkbox"/>
                <ErrorMessage name="terms" component="div" />
                Accept terms.
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}
