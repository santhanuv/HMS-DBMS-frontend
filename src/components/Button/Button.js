import StyledButton from "./Styles";
import React from "react";

function Button({
  id,
  onClick,
  text,
  classNames,
  wrapperClassNames,
  icon,
  disabled,
  isCustom,
}) {
  return (
    <div ClassName={wrapperClassNames}>
      <StyledButton
        className={classNames}
        disabled={disabled}
        isCustom={isCustom}
        id={id}
        onClick={onClick}
      >
        {icon ? <span>{icon}</span> : null}
        {text ? <span>{text}</span> : null}
      </StyledButton>
    </div>
  );
}

export default Button;
