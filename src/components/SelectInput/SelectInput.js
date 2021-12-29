import { StyledSelectLabel, Wrapper, StyledSelectInput } from "./Styles";
import React from "react";

function SelectInput({
  text,
  wrapperClassNames,
  options,
  classNames,
  id,
  name,
}) {
  return (
    <Wrapper className={wrapperClassNames}>
      <StyledSelectInput
        className={`${classNames} peer outline-none focus:outline-white 
        focus:border-transparent focus:ring-primaryBlue`}
        id={id}
        name={name ? name : id}
      >
        {options.map((option) => (
          <option value="option">{option}</option>
        ))}
      </StyledSelectInput>
      <StyledSelectLabel for={id}>{text}</StyledSelectLabel>
    </Wrapper>
  );
}

export default SelectInput;
