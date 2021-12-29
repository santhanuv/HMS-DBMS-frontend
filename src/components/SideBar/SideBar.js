import React from "react";
import { FaBars, FaAngleLeft } from "react-icons/fa";
import Button from "../Button";

function SideBar({ items, onClick, openState }) {
  const notSlectedBtnClasses = "text-primaryGrey";

  const createButtonList = (items, openState) => {
    return (
      <>
        {items.map((item) => {
          return (
            <Button
              text={openState ? item.text : null}
              icon={item.icon}
              id={item.id}
              onClick={item.onClick}
              wrapperClassNames="w-full my-[15px]"
              classNames={`h-[80px] flex items-center gap-[25px] w-full text-2xl 
                ${openState ? "pl-[50px]" : "justify-center"}
                ${!item.selected ? notSlectedBtnClasses : ""}`}
              isCustom={!item.selected}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="bg-lightGrey h-full w-full">
        {/* The Header Part*/}
        {openState ? (
          <div className="flex flex-row justify-between py-[50px] px-[25px]">
            <h1 className="text-3xl font-montserrat font-bold text-primaryGrey h-full">
              MediCare
            </h1>
            <Button
              isCustom={true}
              id="close_btn"
              onClick={onClick}
              icon={<FaAngleLeft />}
              classNames="text-5xl text-primaryGrey hover:bg-lightGrey rounded-[100px]"
            />
          </div>
        ) : (
          <Button
            isCustom={true}
            id="open_btn"
            onClick={onClick}
            icon={<FaBars />}
            classNames="text-3xl text-primaryGrey hover:bg-lightGrey rounded-[100px] p-[10px]"
            wrapperClassNames="flex justify-center items-center py-[50px] w-full"
          />
        )}

        {/* The Content Part */}
        <div className={`${!openState && "mt-[50px]"}`}>
          {createButtonList(items, openState)}
        </div>
      </div>
    </>
  );
}

export default SideBar;
