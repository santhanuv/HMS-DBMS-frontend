import * as yup from "yup";
import { subYears } from "date-fns";

yup.addMethod(yup.string, "integer", function (message) {
  return this.matches(/^\d+$/, message);
});

const minAgeYear = 13;

const staffRegisterationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is Required")
    .min(3, "First Name should be atleast 3 characters"),
  lastName: yup.string().required("Last Name is required"),
  dob: yup
    .date()
    .strict(true)
    .typeError("Date of Birth should be a valid date")
    .max(
      subYears(new Date(), minAgeYear),
      `Should be atleast ${minAgeYear} years old`
    )
    .required("Date of Birth is required"),
  phoneNumber: yup
    .string()
    .length(10, "Phone Number should be 10 characters")
    .integer("Phone Number should have numbers only")
    .required("Phone Number is required"),
  gender: yup.string().required("Gender is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  address: yup.string().required("Address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password Must be 6 characters long")
    .max(50, "Password should be less than 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("Confirm Password is required"),
});

export default staffRegisterationSchema;
