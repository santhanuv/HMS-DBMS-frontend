import React, { useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "../Button";
import StyledCardButton from "./Styles";
import Card from "../Card";

function CardSlider({ children, classNames }) {
  const [cardIndex, setCardIndex] = useState(0);

  const handleLeftClick = (e) => {
    if (cardIndex === 0) return;
    setCardIndex((prevCardIndex) => prevCardIndex - 1);
  };

  const handleRightClick = (e) => {
    if (cardIndex < children.length - 1)
      setCardIndex((prevCardIndex) => prevCardIndex + 1);
  };

  return (
    <Card classNames="bg-white">
      <div
        className={`flex flex-row items-center p-6 justify-between w-full h-full ${classNames}`}
      >
        <Button
          icon={<FaAngleLeft />}
          id="btn_left"
          onClick={handleLeftClick}
          classNames={`text-3xl font-montserrat hover:bg-lightGrey 
        rounded-[100px] p-3 ${
          cardIndex === 0 ? "text-disabledGrey" : "text-primaryGrey"
        }`}
          isCustom={true}
        />
        <div className="w-full h-full p-5">{children[cardIndex]}</div>
        <div>
          <Button
            id="btn_right"
            icon={<FaAngleRight />}
            onClick={handleRightClick}
            classNames={`text-3xl font-montserrat hover:bg-lightGrey 
            rounded-[100px] p-3 ${
              cardIndex >= children.length - 1
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
