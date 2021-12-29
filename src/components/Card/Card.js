import StyledCard from "./Styles";
import React from "react";

function Card({ classNames, children }) {
  return (
    <>
      <StyledCard className={`${classNames}`}>{children}</StyledCard>
    </>
  );
}

export default Card;
