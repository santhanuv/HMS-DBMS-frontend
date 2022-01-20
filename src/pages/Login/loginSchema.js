import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be atleast 6 characters long")
    .required("Password is required"),
});

export default loginSchema;
