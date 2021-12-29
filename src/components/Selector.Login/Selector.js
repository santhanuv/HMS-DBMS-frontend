import Button from "./Styles";
import React from "react";

/*
  Props: 
    selected: 
      0 -> First button is selected
      1 -> Second button is selected
    
      text: 
        Array of two texts
*/

function Selector({ btnInfo, onClick, selected }) {
  // set selected to 0 for selecting text at index 0 & 1 index 2
  // Twin doesn't support tailwind ver. 3.x

  return (
    <div className="w-full gap-0 columns-2 h-12 mt-20">
      <div>
        <Button
          id={btnInfo[0].id}
          selected={selected}
          pos="left"
          onClick={onClick}
        >
          {btnInfo[0].text}
        </Button>
      </div>
      <div>
        <Button
          id={btnInfo[1].id}
          selected={!selected}
          pos="right"
          onClick={onClick}
        >
          {btnInfo[1].text}
        </Button>
      </div>
    </div>
  );
}

export default Selector;
