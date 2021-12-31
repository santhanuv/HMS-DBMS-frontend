import React, { useState, useEffect } from "react";
import { FaBars, FaAngleLeft } from "react-icons/fa";
import Button from "../Button";

/**
 *
 * params:
 *  items:    The items to display on the sidebar
 *  selected: Which item needs to be selected
 *  selector: The function that changes selected when the item is clicked
 *  onChange: the function to call when the open state of the sidebar changes
 *
 */

function SideBar({ items, selected, selector, onChange }) {
  const notSlectedBtnClasses = "text-primaryGrey";

  const [openState, setOpenState] = useState(false);

  useEffect(() => onChange && onChange(openState), [openState]);

  const toggleHandle = (e) => {
    if (e.currentTarget.id === "close_btn" && openState) setOpenState(false);
    else if (e.currentTarget.id === "open_btn" && !openState)
      setOpenState(true);
  };

  const handleSelection = (e) => {
    selector(e.currentTarget.id);
  };

  const createButtonList = (items, openState, selected) => {
    return (
      <>
        {items.map((item) => {
          return (
            <Button
              text={openState ? item.text : null}
              icon={item.icon}
              id={item.id}
              onClick={handleSelection}
              wrapperClassNames="w-full my-[15px]"
              classNames={`h-[80px] flex items-center gap-[25px] w-full text-2xl 
                ${openState ? "pl-[50px]" : "justify-center"}
                ${selected !== item.id ? notSlectedBtnClasses : ""}`}
              isCustom={selected !== item.id}
            />
          );
        })}
      </>
    );
  };

  // SideBar
  return (
    <div
      className={`h-full bg-lightGrey ${openState ? `w-[320px]` : `w-[100px]`}`}
    >
      {/* The Header Part*/}
      {openState ? (
        <div className="flex flex-row justify-between py-[50px] px-[25px] items-center">
          <h1 className="text-3xl font-montserrat font-bold text-primaryGrey h-full">
            MediCare
          </h1>
          <Button
            isCustom={true}
            id="close_btn"
            onClick={toggleHandle}
            icon={<FaAngleLeft />}
            classNames="text-5xl text-primaryGrey hover:bg-lightGrey rounded-[100px]"
          />
        </div>
      ) : (
        <Button
          isCustom={true}
          id="open_btn"
          onClick={toggleHandle}
          icon={<FaBars />}
          classNames="text-3xl text-primaryGrey hover:bg-lightGrey rounded-[100px] p-[10px]"
          wrapperClassNames="flex justify-center items-center py-[50px] w-full"
        />
      )}

      {/* The Content Part */}
      <div className={`${!openState && "mt-[50px]"}`}>
        {createButtonList(items, openState, selected)}
      </div>
    </div>
  );
}

export default SideBar;
