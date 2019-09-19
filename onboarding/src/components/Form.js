import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styled from 'styled-components'

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

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "Supply a Name!!!";
  }

  if (!formValues.password) {
    errors.password = "Enter Password";
  } else if (formValues.password.length < 6) {
    errors.password = "Please use a more secure password";
  }

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (formValues.email.toLowerCase() === "waffle@syrup.com") {
    errors.email = "Email Taken, nigga";
  }

  if (!formValues.terms) {
    errors.terms = "Please read and accept terms";
  }

  if (!formValues.gender) {
    errors.gender = "Choose a gender";
  }

  return errors;
};

const initialForm = {
  name: "",
  email: "",
  role: "sl",
  password: "",
  gender: "male",
  terms: false
};

const StyledForm = styled(Form)`

    label {
        font-family: 'Tangerine', serif;
        font-size: 25px;
    }
`

const StyledField = styled(Field)`
    margin: 5px;
    background: none;
    width: 300px;
    border: 1px solid green;
    border-radius: 3px;
    padding: 3px;
`

export default function CustomForm({ onSubmit }) {
  return (
    <Formik
      validationSchema={validationSchema}
      validate={validate}
      initialValues={initialForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          <StyledForm>
            {!props.dirty && <div>time to start typing!!</div>}
            <div>
              <label>
                Name
                <StyledField name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </label>
            </div>
            <div>
              <label>
                Email
                <StyledField name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div>
              <label>
                Password
                <StyledField name="password" type="text" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <div>
              <label>
                Gender
                <StyledField component="select" name="role">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </StyledField>
                <ErrorMessage name="gender" component="div" />
              </label>
            </div>
            <div>
              <label>
                Role
                <StyledField component="select" name="role">
                  <option value="student">Student</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Section Lead">Section Lead</option>
                </StyledField>
              </label>
            </div>
            <div>
              <label>
                <StyledField name="terms" type="checkbox" />
                <ErrorMessage name="terms" component="div" />
                <br/>
                Accept terms.
              </label>
            </div>
            <button type="submit">Submit</button>
          </StyledForm>
        );
      }}
    />
  );
}
