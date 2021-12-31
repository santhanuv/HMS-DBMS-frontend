import { StyledForm } from "./Style";

import React from "react";

function Form({ formInputs, classNames, ref }) {
  return (
    <>
      {formInputs.map((formInput) => (
        <>{formInput}</>
      ))}
    </>
  );
}

export default Form;
