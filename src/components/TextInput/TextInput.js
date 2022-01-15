import {
  StyledTextInput,
  Wrapper,
  Label,
  CalenderButton,
  DateWrapper,
  StyledTextArea,
} from "./Styles";
import React, { useEffect, useRef, useState } from "react";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import DatePicker from "../DatePicker/DatePicker";
import Card from "../Card";
import { isMatch, parse } from "date-fns";

function TextInput({
  text,
  name,
  id,
  wrapperClassNames,
  classNames,
  type,
  onChange,
  varient = "default",
  noMargin = false,
}) {
  const [labelVisible, setLabelVisible] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const inputRef = useRef();
  const datePickerRef = useRef();

  useEffect(() => {
    const handleDatePickerBlur = (event) => {
      if (!inputRef.current || !datePickerRef.current) return;

      if (
        !inputRef.current.contains(event.target) &&
        !datePickerRef.current.contains(event.target)
      ) {
        changeDatePickerVisiblity(false);
      }
    };

    document.addEventListener("mousedown", handleDatePickerBlur);
    return () => {
      document.removeEventListener("mousedown", handleDatePickerBlur);
    };
  }, [inputRef, datePickerRef]);

  const handleTyping = (e) => {
    const textVal = e.currentTarget.value;

    if (!labelVisible && !textVal) setLabelVisible(true);
    else if (labelVisible && textVal) setLabelVisible(false);
  };

  const changeDatePickerVisiblity = (value) => setDatePickerVisible(value);

  const setDateValue = (date) => {
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];

    inputRef.current.value = `${day}/${month + 1}/${year}`;
    inputRef.current.blur();
    changeDatePickerVisiblity(false);
    setSelectedDate(date);
  };

  const selectDateOnEnter = (e) => {
    if (varient !== "date") return;
    if (e.key === "Enter") {
      const string = e.currentTarget.value;
      if (isMatch(string, "dd/LL/yyyy")) {
        const date = parse(string, "dd/LL/yyyy", new Date());
        setSelectedDate(date);
      }
    }
  };

  const varients = {
    date: (
      <StyledTextInput
        type={type ? type : "text"}
        id={id}
        ref={inputRef}
        onFocus={() => changeDatePickerVisiblity(true)}
        name={name}
        onChange={handleTyping}
        onKeyDown={selectDateOnEnter}
        placeholder={text}
        className={`${classNames} peer outline-none focus:outline-white 
    focus:border-transparent focus:ring-primaryBlue placeholder-remove-focus`}
        // placeholder-remove-focus is custom utility
      />
    ),
    textArea: (
      <StyledTextArea
        id={id}
        name={name}
        onChange={handleTyping}
        placeholder={text}
        className={`${classNames} peer outline-none focus:outline-white 
  focus:border-transparent focus:ring-primaryBlue placeholder-remove-focus`}
      />
    ),
    table: (
      <StyledTextInput
        type={type ? type : "text"}
        id={id}
        ref={inputRef}
        onChange={onChange}
        name={name}
        placeholder={text}
        className={`${classNames} peer outline-none focus:outline-primaryBlue 
focus:border-transparent focus:ring-white placeholder-remove-focus`}
        // placeholder-remove-focus is custom utility
      />
    ),
    default: (
      <StyledTextInput
        type={type ? type : "text"}
        id={id}
        ref={inputRef}
        name={name}
        onChange={handleTyping}
        placeholder={text}
        className={`${classNames} peer outline-none focus:outline-white 
  focus:border-transparent focus:ring-primaryBlue placeholder-remove-focus`}
        // placeholder-remove-focus is custom utility
      />
    ),
  };

  return (
    <Wrapper
      className={`${wrapperClassNames} ${
        varient === "textArea"
          ? "h-[200px]"
          : varient === "table"
          ? "h-10"
          : "h-20"
      } ${noMargin ? "" : "mb-16"}`}
    >
      {varients[varient]}

      {!(varient === "table") && (
        <Label for={id} varient={varient === "table" && "blue"}>
          {text}
        </Label>
      )}
      {varient === "date" ? (
        <CalenderButton disabled={true}>
          <BsFillCalendarPlusFill />
        </CalenderButton>
      ) : null}
      {varient === "date" && datePickerVisible ? (
        <DateWrapper ref={datePickerRef}>
          <DatePicker
            varient="popup"
            selectedDate={selectedDate}
            setSelectedDate={setDateValue}
          />
        </DateWrapper>
      ) : null}
    </Wrapper>
  );
}

export default TextInput;
