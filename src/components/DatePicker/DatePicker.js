import React, { useState, useEffect, useRef } from "react";
import { takeWeeks, takeMonths, takeYears } from "../../utils/dates";
import { IoCalendarClear } from "react-icons/io5";
import {
  WeekWrapper,
  WeekNameWrapper,
  Week,
  WeekName,
  SelectorWrapper,
  Selector,
} from "./Styles";
import {
  format,
  isSameDay,
  isSameMonth,
  getMonth,
  getYear,
  startOfDay,
} from "date-fns";
import Card from "../Card";
import Select from "../Select/Select";
import { useCallback } from "react/cjs/react.development";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const WeekHeader = () => {
  const weekNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <WeekNameWrapper>
      {weekNames.map((name) => (
        <WeekName>{name}</WeekName>
      ))}
    </WeekNameWrapper>
  );
};

const Weeks = ({ month, onClick, selected }) => {
  const isSelected = (day1, day2) => {
    if (isSameDay(day1, day2)) return "bg-primaryBlue text-white font-bold";
    else return "text-primaryGrey";
  };

  const getWeekClasses = (month, day) => {
    if (!isSameMonth(month[1][0], day)) return "text-disabledGrey";
    return `hover:bg-primaryBlue hover:text-white hover:font-bold ${isSelected(
      day,
      selected
    )}`;
  };

  const isDisabled = (month, day) => {
    return !isSameMonth(month[1][0], day);
  };

  const getCurrentDayClasses = (day) => {
    if (isSameDay(day, new Date()))
      return "text-primaryBlue bg-lightGrey font-semibold";
  };

  return (
    <WeekWrapper>
      {month.map((week) => {
        return week.map((day) => {
          return (
            <Week
              disabled={isDisabled(month, day)}
              className={`${getWeekClasses(month, day)} ${getCurrentDayClasses(
                day
              )}`}
              id={format(day, "d")}
              onClick={onClick}
            >
              {format(day, "dd")}
            </Week>
          );
        });
      })}
    </WeekWrapper>
  );
};

function DatePicker() {
  const getYearList = (selectedYear, length = 21) => {
    const pivot = Math.floor(length / 2);
    const years = [...Array(length)].map(
      (_, index) => selectedYear - pivot + index
    );
    const seleted = years.indexOf(selectedYear);
    return { yearList: years, selected: seleted };
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yearListObj = getYearList(getYear(startOfDay(new Date())));
  const yearList = yearListObj.yearList;

  const getSelectedMonth = (month) => {
    return getMonth(startOfDay(month[1][0]));
  };

  const changeMonth = (
    monthName,
    monthIndex = monthNames.indexOf(monthName)
  ) => {
    const newMonth = takeMonths(new Date(yearList[selectedYear], monthIndex))();
    setMonth(newMonth);
  };

  const changeSlectedYear = (value) => {
    setSelectedYear(yearList.indexOf(value));
  };

  const changeSelectedDate = (month) => (e) => {
    const btnId = e.currentTarget.id;
    const newDate = new Date(
      yearList[selectedYear],
      getSelectedMonth(month),
      btnId
    );
    setSelectedDate(newDate);
  };

  const [selectedYear, setSelectedYear] = useState(yearListObj.selected);
  const [month, setMonth] = useState(takeMonths()());
  const firstRender = useRef(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    !firstRender.current && changeMonth(null, getSelectedMonth(month));
    firstRender.current = false;
  }, [selectedYear]);

  return (
    <Card classNames="bg-primaryWhite w-[500px] h-[500px] p-[20px] m-20">
      <SelectorWrapper>
        <div>
          <Select
            options={monthNames}
            initVal={getSelectedMonth(month)}
            onChange={changeMonth}
          />
        </div>
        <Select
          options={yearList}
          initVal={selectedYear}
          onChange={changeSlectedYear}
        />
      </SelectorWrapper>
      <WeekHeader />
      <Weeks
        month={month}
        onClick={changeSelectedDate(month)}
        selected={selectedDate}
      />
    </Card>
  );
}

export default DatePicker;
