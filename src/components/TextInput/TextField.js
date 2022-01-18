import React from "react";
import {
  StyledTextInput,
  Wrapper,
  Label,
  StyledInputClassNames,
  StyledTextArea,
} from "./Styles";
import tw from "twin.macro";

function TextField({
  name,
  id,
  text,
  value,
  onChange,
  type = "text",
  wrapperClassName,
  className,
  isMultiLine = false,
  inTable = false,
}) {
  return (
    <Wrapper className={`${wrapperClassName}`}>
      {!isMultiLine ? (
        <StyledTextInput
          type={type}
          id={id}
          name={name}
          placeholder={text}
          value={value}
          onChange={onChange}
          className={`${StyledInputClassNames(inTable)} ${className} ${
            inTable && tw`ring-primaryBlue`
          }`}
        />
      ) : (
        <StyledTextArea
          type={type}
          id={id}
          name={name}
          placeholder={text}
          value={value}
          onChange={onChange}
          className={`${StyledInputClassNames(inTable)} ${className}`}
        />
      )}
      {!inTable && <Label htmlFor={id}>{text}</Label>}
    </Wrapper>
  );
}

export default TextField;
