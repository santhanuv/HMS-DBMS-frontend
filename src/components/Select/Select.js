import React, { useState, useEffect, useCallback } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Listbox, Transition } from "@headlessui/react";
import { StyledListBoxButton, Wrapper, MenuWrapper } from "./Styles";
import tw from "twin.macro";

function Select({
  options,
  initVal,
  varient,
  onChange,
  wrapperClassNames,
  btnClassNames,
}) {
  const [selected, setSelected] = useState(options[initVal]);

  const handleChange = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <Wrapper varient={varient} className={`${wrapperClassNames}`}>
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <>
            <StyledListBoxButton
              varient={varient}
              className={`${
                open ? "rounded-t-[10px]" : "rounded-[10px]"
              } ${btnClassNames}`}
            >
              {selected}
              <RiArrowDropDownLine className="text-4xl" />
            </StyledListBoxButton>
            <MenuWrapper
              varient={varient}
              className={`${!open && "hidden"}
            overflow-scroll drop-shadow-xl`}
            >
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options>
                  {options.map((monthName, index) => (
                    <Listbox.Option key={index} value={monthName}>
                      {({ active, selected }) => (
                        <div
                          className={`${
                            active ? "text-white bg-primaryBlue font-bold" : ""
                          } ${
                            selected && !active && "text-primaryBlue font-bold"
                          } px-[18px]`}
                        >
                          {monthName}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </MenuWrapper>
          </>
        )}
      </Listbox>
    </Wrapper>
  );
}

export default Select;
