import * as yup from "yup";

yup.addMethod(yup.string, "integer", function (message) {
  return this.matches(/^\d+$/, message);
});

const addDocSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please give a valid email")
    .required("Email is required"),
  role: yup.string().required("Role is required"),
  department: yup.string().required("Department is required"),
  salary: yup.number("Should be a number").required("Salary is required"),
});

export default addDocSchema;
