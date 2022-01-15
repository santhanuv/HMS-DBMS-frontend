import React from "react";
import { StyledBadge } from "./Styles";

function Badge({ children, varient }) {
  return (
    <StyledBadge varient={varient} className="w-fit">
      <h1>{children}</h1>
    </StyledBadge>
  );
}

export default Badge;
