import React, { useState, useRef, useEffect } from "react";
import {
  StyledTextInput,
  Wrapper,
  Label,
  CalenderButton,
  DateWrapper,
  StyledInputClassNames,
  Error,
} from "./Styles";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import DatePicker from "../DatePicker/DatePicker";
import { isValid } from "date-fns";
import format from "date-fns/format";
import { BiErrorCircle } from "react-icons/bi";

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
  errMsg,
}) {
  const [pickerVisible, setPickerVisible] = useState(false);
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

  // Custom fuction to parse date Because parse in date-fns maths year with 2-digits
  function parseDate(string) {
    if (typeof string !== "string") return;
    const match = string.match(
      /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/(\d{4})$/
    );
    return match ? new Date(match[3], match[2] - 1, match[1]) : null;
  }

  const dateToString = (date) => {
    if (typeof date === "string") return date;
    if (isValid(date)) return format(date, "dd/MM/yyyy");

    const parsedDate = parseDate(date);
    if (!parsedDate) return date;
    else return format(date, "dd/MM/yyyy");
  };

  const stringToDate = (string) => {
    const date = parseDate(string);
    if (isValid(date)) return date;
    else return string;
  };

  return (
    <Wrapper className={`${wrapperClassName}`}>
      <StyledTextInput
        name={name}
        id={id}
        placeholder={text}
        value={dateToString(value)}
        ref={inputRef}
        onFocus={() => setPickerVisible(true)}
        onChange={(e) =>
          onChange({ name, value: stringToDate(e.currentTarget.value) })
        }
        // StyledInputClassNames takes a param inTable which shows the text field is in the table or not
        className={`${StyledInputClassNames(false)} ${className}`}
      />
      <Label htmlFor={id}>{text}</Label>
      <CalenderButton disabled={true}>
        <BsFillCalendarPlusFill />
      </CalenderButton>
      {pickerVisible && (
        <DateWrapper ref={datePickerRef}>
          <DatePicker
            varient="popup"
            selectedDate={typeof value === "string" ? null : value}
            setSelectedDate={(date) => onChange({ name, value: date })}
            startYear={startYear}
            endYear={endYear}
          />
        </DateWrapper>
      )}
      <Error>
        {errMsg && <BiErrorCircle className="text-xl" />}
        {errMsg}
      </Error>
    </Wrapper>
  );
}

export default DateFeild;
