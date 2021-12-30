import React from "react";
import { StyledCardButton } from "./Styles";

function CardButton({ icon, text, btnIcon, id, onClick, name }) {
  return (
    <StyledCardButton id={id} name={name ? name : id} onClick={onClick}>
      <span>{icon}</span>
      <span>{text}</span>
      <span>{btnIcon}</span>
    </StyledCardButton>
  );
}

export default CardButton;
