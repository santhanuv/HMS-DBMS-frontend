import React, { useState } from "react";

import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import Button from "../Button";
import StyledCardButton from "./Styles";
import Card from "../Card";

function CardSlider({ children, classNames, cap = 1, varient = 0 }) {
  const [cardIndex, setCardIndex] = useState(0);

  const cardCap = parseInt(cap);

  const handleLeftClick = (e) => {
    if (cardIndex === 0) return;
    setCardIndex((prevCardIndex) => prevCardIndex - 1);
  };

  const handleRightClick = (e) => {
    if (cardIndex + cardCap < children.length)
      setCardIndex((prevCardIndex) => prevCardIndex + 1);
  };

  return (
    <Card classNames="bg-white w-full h-full">
      <div
        className={`flex ${
          varient === 0 ? "flex-row" : "flex-col"
        } items-center p-6 justify-between w-full h-full ${classNames}`}
      >
        <Button
          icon={varient === 0 ? <FaAngleLeft /> : <FaAngleUp />}
          id="btn_left"
          onClick={handleLeftClick}
          classNames={`text-3xl font-montserrat hover:bg-lightGrey 
        rounded-[100px] p-3 ${
          cardIndex === 0 ? "text-disabledGrey" : "text-primaryGrey"
        }`}
          isCustom={true}
        />
        <div
          className={`w-full h-full p-5 flex justify-between 
        ${varient === 0 ? "flex-row" : "flex-col"} gap-3`}
        >
          {children.slice(cardIndex, cardIndex + cardCap)}
        </div>
        <div>
          <Button
            id="btn_right"
            icon={varient === 0 ? <FaAngleRight /> : <FaAngleDown />}
            onClick={handleRightClick}
            classNames={`text-3xl font-montserrat hover:bg-lightGrey 
            rounded-[100px] p-3 ${
              cardIndex + cardCap >= children.length
                ? "text-disabledGrey"
                : "text-primaryGrey"
            }`}
            isCustom={true}
          />
        </div>
      </div>
    </Card>
  );
}

export default CardSlider;
