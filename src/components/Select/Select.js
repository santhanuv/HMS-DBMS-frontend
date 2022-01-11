import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Listbox } from "@headlessui/react";
import { StyledListBoxButton, Wrapper, MenuWrapper } from "./Styles";

function Select({ options, initVal }) {
  const [selectedMonth, setSelectedMonth] = useState(options[initVal]);

  return (
    <Wrapper>
      <Listbox value={selectedMonth} onChange={setSelectedMonth}>
        {({ open }) => (
          <>
            <StyledListBoxButton
              className={open ? "rounded-t-[10px]" : "rounded-[10px]"}
            >
              {selectedMonth}
              <RiArrowDropDownLine className="text-3xl" />
            </StyledListBoxButton>
            <MenuWrapper
              className={`${!open && "hidden"}
            overflow-scroll drop-shadow-xl`}
            >
              <Listbox.Options>
                {options.map((monthName, index) => (
                  <Listbox.Option key={index} value={monthName}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active ? "text-white bg-primaryBlue font-bold" : ""
                        } ${
                          selected && !active && "text-primaryBlue font-bold"
                        } px-[18px]`}
                      >
                        {monthName}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </MenuWrapper>
          </>
        )}
      </Listbox>
    </Wrapper>
  );
}

export default Select;
