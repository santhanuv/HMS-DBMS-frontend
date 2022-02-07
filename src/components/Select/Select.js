import React, { forwardRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Listbox, Transition } from "@headlessui/react";
import { StyledListBoxButton, Wrapper, MenuWrapper, Error } from "./Styles";
import { BiErrorCircle } from "react-icons/bi";

const capitalizeWord = (string) =>
  string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const Select = forwardRef(
  (
    {
      options,
      name,
      onChange = () => {},
      value = "",
      varient,
      wrapperClassName,
      btnClassName,
      errMsg,
      disableFirst = false,
    },
    ref
  ) => {
    return (
      <Wrapper varient={varient} className={`${wrapperClassName}`} ref={ref}>
        <Listbox
          value={value}
          name={name}
          onChange={(value) => onChange({ name, value })}
        >
          {({ open }) => (
            <>
              <StyledListBoxButton
                varient={varient}
                className={`${
                  open ? "rounded-t-[10px]" : "rounded-[10px]"
                } ${btnClassName}`}
              >
                {value || capitalizeWord(name)}
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
                      <Listbox.Option
                        key={index}
                        value={itemName}
                        disabled={
                          varient === "form" &&
                          disableFirst &&
                          index === 0 &&
                          true
                        }
                      >
                        {({ active, selected, disabled }) => (
                          <div
                            className={`${
                              active && "text-white bg-primaryBlue font-bold"
                            } ${
                              selected &&
                              !active &&
                              "text-primaryBlue font-bold"
                            } ${disabled && "text-disabledGrey"}
                          px-[18px]`}
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
        <Error>
          {errMsg && <BiErrorCircle className="text-xl" />}
          {errMsg}
        </Error>
      </Wrapper>
    );
  }
);

export default Select;
