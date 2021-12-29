import { StyledTextInput, Wrapper, Label } from "./Styles";
import React, { useState } from "react";

function TextInput({ text, name, id, wrapperClassNames, classNames, type }) {
  const [labelVisible, setLabelVisible] = useState(true);

  const handleTyping = (e) => {
    const textVal = e.currentTarget.value;

    if (!labelVisible && !textVal) setLabelVisible(true);
    else if (labelVisible && textVal) setLabelVisible(false);
  };

  return (
    <Wrapper className={wrapperClassNames}>
      <StyledTextInput
        type={type ? type : "text"}
        id={id}
        name={name}
        onChange={handleTyping}
        placeholder={text}
        className={`${classNames} peer outline-none focus:outline-white 
        focus:border-transparent focus:ring-primaryBlue placeholder-remove-focus`}
        // placeholder-remove-focus is custom utility
      />
      <Label for={id} className="">
        {text}
      </Label>
    </Wrapper>
  );
}

export default TextInput;
