import StyledLink from "./Styles";
import React from "react";

function Link(props) {
  return (
    <div className={props.wrapperClassNames}>
      <StyledLink className={props.classNames} to={props.to}>
        {props.children}
      </StyledLink>
    </div>
  );
}

export default Link;
