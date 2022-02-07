import React from "react";
import StyledAvatar from "./Styles";

function Avatar({ image, name, id, onClick }) {
  return (
    <div id={id} onClick={onClick} className="h-fit">
      <div
        className="w-[40px] aspect-square rounded-[100px] text-2xl text-white 
        bg-primaryGrey"
      >
        <span className="w-full h-full flex justify-center items-center">
          {image ? image : name[0]}
        </span>
      </div>
    </div>
  );
}

export default Avatar;
