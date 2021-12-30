import React from "react";
import { StyledBadge } from "./Styles";

/**
 *  params:
 *      state: success, failed, pending
 *
 */

function Badge({ children, varient }) {
  return (
    <StyledBadge varient={varient} className="w-fit">
      <h1>{children}</h1>
    </StyledBadge>
  );
}

export default Badge;
