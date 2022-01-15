import React, { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Listbox, Transition } from "@headlessui/react";
import { StyledListBoxButton, Wrapper, MenuWrapper } from "./Styles";

function Select({
  options,
  selected,
  varient,
  setSelected,
  wrapperClassNames,
  btnClassNames,
}) {
  const handleChange = (value) => {
    const index = options.indexOf(value);
    if (selected && setSelected) setSelected(index);
    else setDefaultSelected(index);
  };

  const [defaultSelected, setDefaultSelected] = useState(0);

  return (
    <Wrapper varient={varient} className={`${wrapperClassNames}`}>
      <Listbox
        value={options[selected || defaultSelected]}
        onChange={handleChange}
      >
        {({ open }) => (
          <>
            <StyledListBoxButton
              varient={varient}
              className={`${
                open ? "rounded-t-[10px]" : "rounded-[10px]"
              } ${btnClassNames}`}
            >
              {options[selected || defaultSelected]}
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
                  {options.map((itemName, index) => (
                    <Listbox.Option key={index} value={itemName}>
                      {({ active, selected }) => (
                        <div
                          className={`${
                            active ? "text-white bg-primaryBlue font-bold" : ""
                          } ${
                            selected && !active && "text-primaryBlue font-bold"
                          } px-[18px]`}
                        >
                          {itemName}
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
