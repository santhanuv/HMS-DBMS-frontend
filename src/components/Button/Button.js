import StyledButton from "./Styles";
import React from "react";

/**
 *
 *  Params:
 *    id: id of the button
 *    onClick: the function to be called on click
 *    text: the text of the button
 *    classNames: the tailwind classnames for button
 *    WrapperClassNames: the tailwind classnames for the wrapper on the button
 *    icon: the icon of the button
 *    disabled: to disable the button
 *    isCustom: to do custom styling
 *    ref: to add a reference
 *
 */

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
      >
        {icon ? <span>{icon}</span> : null}
        {text ? <span>{text}</span> : null}
      </StyledButton>
    </div>
  );
}

export default Button;
