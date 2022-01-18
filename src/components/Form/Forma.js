import { StyledForm } from "./Style";
import { useForm } from "react-hook-form";

import React from "react";

function Form({ formInputs, classNames, ref }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {formInputs.map((formInput) => (
        <>{formInput}</>
      ))}
    </>
  );
}

export default Form;
