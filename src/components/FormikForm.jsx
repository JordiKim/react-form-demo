import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as yup from "yup";
import "./style.css";
import { TextField } from "@mui/material";

export const FormikForm = () => {
  const validate = yup.object({
    fullName: yup.string().max(10, "長度不得超過10").required("欄位不得為空"),
    email: yup.string().email("電子郵件的格式有誤").required("欄位不得為空"),
    age: yup.number().min(1, "年齡不得小於1").required("欄位不得為空"),
    password: yup.string().min(6).required("欄位不得為空"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "密碼匹配不一致"),
  });
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <h2>Formik + yup</h2>
        <InputField type="text" label="FullName" placeholder="FullName" name="fullName" />

        <InputField type="text" label="Email" placeholder="Email" name="email" />
        <InputField type="number" label="Age" placeholder="Age" name="age" />
        <InputField type="password" label="Password" placeholder="Password" name="password" />
        <InputField type="password" label="ConfirmPassword" placeholder="Confirm Password" name="confirmPassword" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const InputField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...props} {...field} error={meta.error & true} helperText={meta.error} />
      {/* <ErrorMessage component="p" name={field.name} /> */}
    </>
  );
};
