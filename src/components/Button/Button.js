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
  ref,
  type,
}) {
  return (
    <div className={wrapperClassNames}>
      <StyledButton
        ref={ref}
        className={classNames}
        disabled={disabled}
        isCustom={isCustom}
        id={id}
        onClick={onClick}
        type={type}
      >
        {icon ? <span>{icon}</span> : null}
        {text ? <span>{text}</span> : null}
      </StyledButton>
    </div>
  );
}

export default Button;
