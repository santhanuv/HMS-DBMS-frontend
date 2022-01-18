import React, { useState, useRef, useEffect } from "react";
import {
  StyledTextInput,
  Wrapper,
  Label,
  CalenderButton,
  DateWrapper,
  StyledInputClassNames,
} from "./Styles";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import DatePicker from "../DatePicker/DatePicker";
import { isMatch, parse, isValid } from "date-fns";
import format from "date-fns/format";

function DateFeild({
  name,
  id,
  text,
  value,
  onChange = () => {},
  wrapperClassName,
  className,
  startYear,
  endYear,
}) {
  const [pickerVisible, setPickerVisible] = useState(false);
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
        setPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleDatePickerBlur);
    return () => {
      document.removeEventListener("mousedown", handleDatePickerBlur);
    };
  }, [inputRef, datePickerRef]);

  const dateToString = (date) => {
    return format(date, "MM/dd/yyyy");
  };

  const stringToDate = (string) => {
    const date = parse(string, "MM/dd/yyyy", new Date());
    if (isValid(date)) {
      string = format(date, "MM/dd/yyyy");
      const [month, day, year] = string.split("/");
      return new Date(year, month - 1, day);
    } else {
      return null;
    }
  };

  // const selectDateOnEnter = (e) => {
  //   if (e.key === "Enter") {
  //     const string = e.currentTarget.value;
  //     if (isMatch(parse(string, "MM/dd/yyyy", new Date()), "MM/dd/yyyy")) {
  //       const date = stringToDate(string);
  //       onChange(string);
  //     }
  //   }
  // };

  return (
    <Wrapper className={`${wrapperClassName}`}>
      <StyledTextInput
        name={name}
        id={id}
        placeholder={text}
        value={value}
        ref={inputRef}
        onFocus={() => setPickerVisible(true)}
        onChange={(e) => onChange(e.currentTarget.value)}
        // onKeyDown={selectDateOnEnter}
        className={`${StyledInputClassNames} ${className}`}
      />
      <Label htmlFor={id}>{text}</Label>
      <CalenderButton disabled={true}>
        <BsFillCalendarPlusFill />
      </CalenderButton>
      {pickerVisible && (
        <DateWrapper ref={datePickerRef}>
          <DatePicker
            varient="popup"
            selectedDate={stringToDate(value)}
            setSelectedDate={(date) => onChange(dateToString(date))}
            startYear={startYear}
            endYear={endYear}
          />
        </DateWrapper>
      )}
    </Wrapper>
  );
}

export default DateFeild;
