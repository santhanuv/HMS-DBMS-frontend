import { StyledForm } from "./Style";

import React from "react";

function Form({ formInputs, classNames }) {
  return (
    <StyledForm className={classNames}>
      {formInputs.map((formInput) => (
        <>{formInput}</>
      ))}
    </StyledForm>
  );
}

export default Form;
