import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup.string().required("password is required"),
  terms: yup.boolean().required(),
  gender: yup.string().required()
});



const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "Supply a Name!!!";
  }

  if (!formValues.password) {
    errors.password = "Enter Password";
  } 
  else if (formValues.password.length < 6) {
      errors.password = "Please use a more secure password"
  }

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (formValues.email.toLowerCase() === 'waffle@syrup.com'){
      errors.email = 'Email Taken, nigga'
  }

  if (!formValues.terms){
      errors.terms = "Please read and accept terms"
  }

  if (!formValues.gender){
      errors.gender = "Choose a gender"
  }

  return errors;
};

const initialForm = {
  name: "",
  email: "",
  role: "sl",
  password: "",
  gender:"",
  terms: false
};
export default function CustomForm({onSubmit}) {
  return (
    <Formik
      validationSchema={validationSchema}
      validate={validate}
      initialValues={initialForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
               {
              !props.dirty && <div>time to start typing!!</div>
            }
            <div>
              <label>
                  Name
                  <Field name="name" type="text" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
              </label>
            </div>
            <div>
              <label>
                  Email
              <Field name="email" type="text" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div>
              <label>
                  Password
              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <div>
              <label>
                  Gender
              <Field name="gender" type="text" placeholder="male/female" />
              <ErrorMessage name="gender" component="div" />
              </label>
            </div>
            <div>
                <label>
                    Role
                <Field component="select" name="role">
            <option value="student">Student</option>
            <option value="tl">Team Lead</option>
            <option value="sl">Section Lead</option>
          </Field>
                </label>
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
