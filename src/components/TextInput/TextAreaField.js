import React from "react";
import {
  StyledTextArea,
  Label,
  Wrapper,
  StyledInputClassNames,
  Error,
} from "./Styles";
import { BiErrorCircle } from "react-icons/bi";

function TextAreaField({
  name,
  id,
  text,
  value,
  onChange,
  wrapperClassName,
  className,
  errMsg,
}) {
  return (
    <Wrapper className={`${wrapperClassName}`}>
      <StyledTextArea
        type="text"
        id={id}
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        // StyledInputClassNames first argument tells that the textArea is not in Table
        className={`${StyledInputClassNames(false)} ${className}`}
      />
      <Label htmlFor={id}>{text}</Label>
      <Error>
        {errMsg && <BiErrorCircle className="text-xl" />}
        {errMsg}
      </Error>
    </Wrapper>
  );
}

export default TextAreaField;
