import React from "react";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import TextAreaField from "../../../components/TextInput/TextAreaField";
import { prescribeSchema } from "./prescribeSchema";

const initValue = {
  diseaseDescription: "",
};

function PrescribeForm({ prescriptions }) {
  const { register, onSubmit } = useForm(initValue, prescribeSchema);

  const addPrescriptionToData = (data) => {
    data.prescriptions = prescriptions;
    console.log("prescriptions", data);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          onSubmit(e, addPrescriptionToData);
        }}
      >
        <TextAreaField
          text="Disease Description"
          id="disease-description"
          {...register("diseaseDescription")}
        />
        <Button
          id="done"
          text="Done"
          classNames="p-[20px] text-2xl w-full mb-[60px] rounded-[10px]"
        />
      </form>
    </>
  );
}

export default PrescribeForm;
