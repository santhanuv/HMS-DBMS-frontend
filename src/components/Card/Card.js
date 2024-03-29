import StyledCard from "./Styles";
import React from "react";

function Card({ classNames, children, hasBr = true }) {
  return (
    <>
      <StyledCard hasBr={hasBr} className={`${classNames}`}>
        {children}
      </StyledCard>
    </>
  );
}

export default Card;
