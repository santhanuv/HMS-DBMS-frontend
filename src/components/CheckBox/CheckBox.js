import { StyledCheckBox, StyledLabel } from "./Styes";
import React from "react";

function CheckBox({ id, name, value, text, wrapperClassNames }) {
  return (
    <div className={`flex flex-row items-center ${wrapperClassNames}`}>
      <StyledCheckBox type="checkbox" id={id} name={name} value={value} />
      <StyledLabel>{text}</StyledLabel>
    </div>
  );
}

export default CheckBox;
