import StyledHeading from "./Styles";
import React from "react";

function MainHeading({ children, classNames }) {
  return (
    <>
      <StyledHeading className={classNames}>{children}</StyledHeading>
    </>
  );
}

export default MainHeading;
