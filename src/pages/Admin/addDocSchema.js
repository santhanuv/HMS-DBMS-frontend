import * as yup from "yup";

yup.addMethod(yup.string, "integer", function (message) {
  return this.matches(/^\d+$/, message);
});

const addDocSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "Name should be atleast 3 characters"),
  lastName: yup.string().required("Last Name is required"),
  phoneNumber: yup
    .string()
    .integer("Phone Number should only be numbers")
    .length(10, "Phone Number should contain 10 digits")
    .required("Phone Number is required"),
  email: yup
    .string()
    .email("Please give a valid email")
    .required("Email is required"),
});

export default addDocSchema;
