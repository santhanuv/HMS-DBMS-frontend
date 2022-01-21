import * as yup from "yup";

const prescriptionSchema = yup.object().shape({
  medName: yup.string().required("Medicine Name is required"),
  dosage: yup.string().required("Dosage is required"),
  frequency: yup.string().required("Frequency is required"),
  duration: yup.string().required("Duration is required"),
});

const prescribeSchema = yup.object().shape({
  prescriptions: yup.array().of(
    yup.object().shape({
      medName: yup.string(),
      dosage: yup.string(),
      frequency: yup.string(),
      duration: yup.string(),
    })
  ),
  diseaseDescription: yup.string().required("Disease Description is required"),
});

export { prescribeSchema, prescriptionSchema };
