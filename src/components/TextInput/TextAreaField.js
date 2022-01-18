import React from "react";
import { StyledTextArea, Label, Wrapper } from "./Styles";

function TextAreaField({
  name,
  id,
  text,
  value,
  onChange,
  type = "text",
  wrapperClassName,
  className,
}) {
  return (
    <Wrapper>
      <StyledTextArea
        type={type}
        id={id}
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        className={`${StyledInputClassNames} ${className}`}
      />
      <Label htmlFor={id}>{text}</Label>
    </Wrapper>
  );
}

export default TextAreaField;
