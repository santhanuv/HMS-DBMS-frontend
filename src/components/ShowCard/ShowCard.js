import React from "react";
import Card from "../Card";
import StyledCard from "../Card/Styles";
import StyledShowCard from "./Styles";

function ShowCard({ icon, children = [], classNames }) {
  return (
    <Card classNames={classNames}>
      <StyledShowCard>
        <span>{icon}</span>
        <div className="m-[5px]">
          {children.map((child) => (
            <span>{child}</span>
          ))}
        </div>
      </StyledShowCard>
    </Card>
  );
}

export default ShowCard;