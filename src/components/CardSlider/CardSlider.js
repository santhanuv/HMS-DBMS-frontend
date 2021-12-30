import React, { useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "../Button";
import StyledCardButton from "./Styles";
import Card from "../Card";

function CardSlider({ children, classNames, cap = 1 }) {
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
        <div className="w-full h-full p-5 flex justify-between">
          {console.log(cardIndex, cardIndex + cardCap) ||
            children.slice(cardIndex, cardIndex + cardCap)}
        </div>
        <div>
          <Button
            id="btn_right"
            icon={<FaAngleRight />}
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
