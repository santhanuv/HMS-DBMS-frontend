import React, { useState } from "react";
import { FaBars, FaAngleLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

function SideBar({ items, initSelect = "0" }) {
  const notSlectedBtnClasses = "text-primaryGrey";

  const location = useLocation();
  const selectedPath = items.filter((item) => item.path === location.pathname);
  const selectedId = selectedPath[0].id ? selectedPath[0].id : initSelect;

  const [openState, setOpenState] = useState(false);
  const [selected, setSelected] = useState(selectedId); // Should give the selected id as a string

  const toggleHandle = (e) => {
    if (e.currentTarget.id === "close_btn" && openState) setOpenState(false);
    else if (e.currentTarget.id === "open_btn" && !openState)
      setOpenState(true);
  };

  const handleSelection = (e) => {
    setSelected(e.currentTarget.id);
  };

  const createButtonList = (items, openState, selected) => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
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
            </Link>
          );
        })}
      </>
    );
  };

  // SideBar
  return (
    <div
      className={`h-full bg-lightGrey ${openState ? `w-[350px]` : `w-[100px]`}`}
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
