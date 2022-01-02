import React from "react";
import StyledAvatar from "./Styles";
import { FaAngleDown } from "react-icons/fa";

function Avatar({ image, name, id, onClick }) {
  return (
    <StyledAvatar id={id} onClick={onClick}>
      <div
        className="w-[45px] aspect-square rounded-[100px] text-3xl text-white 
        bg-primaryGrey"
      >
        <span className="w-full h-full flex justify-center items-center">
          {image ? image : name[0]}
        </span>
      </div>
      <span className="text-xl">{name}</span>
      <span>
        <FaAngleDown />
      </span>
    </StyledAvatar>
  );
}

export default Avatar;
