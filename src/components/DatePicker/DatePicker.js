import React, { useState, useEffect, useRef } from "react";
import { takeMonths } from "../../utils/dates";
import { WeekWrapper, Week, WeekName, SelectorWrapper } from "./Styles";
import { format, isSameDay, isSameMonth, getYear, startOfDay } from "date-fns";
import Select from "../Select/Select";

const Weeks = ({ monthIndex, onClick, selected, varient, selectedYear }) => {
  const weekNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getMonth = (monthIndex) => {
    if (!selectedYear || (monthIndex < 0 && monthIndex > 12))
      return takeMonths()();
    else if (monthIndex < 0 && monthIndex > 12)
      return takeMonths(new Date(selectedYear))();
    return takeMonths(new Date(selectedYear, monthIndex))();
  };

  const month = getMonth(monthIndex);

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
      {weekNames.map((name) => (
        <WeekName varient={varient}>{name}</WeekName>
      ))}
      {month.map((week) => {
        return week.map((day) => {
          return (
            <Week
              varient={varient}
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

function DatePicker({ varient = "default", selectedDate, setSelectedDate }) {
  const getYearList = (selectedDate, length = 21) => {
    const selectedYear =
      selectedDate === null
        ? getYear(startOfDay(new Date()))
        : getYear(startOfDay(selectedDate));

    const currentYear = getYear(startOfDay(new Date()));
    const pivot = Math.floor(length / 2);

    const years = [...Array(length)].map(
      (_, index) => currentYear - pivot + index
    );
    let selected = years.indexOf(selectedYear);
    selected = selected === -1 ? 10 : selected;
    return { yearList: years, selected: selected };
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

  const yearListObj = getYearList(selectedDate);
  const yearList = yearListObj.yearList;

  const getSelectedMonth = () => {
    if (!selectedDate) selectedDate = new Date();
    return selectedDate.getMonth();
  };

  const changeSlectedYear = (value) => {
    setSelectedYear(yearList.indexOf(value));
  };

  const changeSelectedDate = (month) => (e) => {
    const day = e.currentTarget.id;
    const newDate = new Date(yearList[selectedYear], month, day);
    setSelectedDate(newDate);
  };

  const [selectedYear, setSelectedYear] = useState(0);
  const [month, setMonth] = useState(0);
  const firstRender = useRef(true);

  useEffect(() => {
    setSelectedYear(yearListObj.selected);
    setMonth(getSelectedMonth());
  }, [selectedDate]);

  return (
    <>
      <SelectorWrapper varient={varient}>
        <div>
          <Select
            options={monthNames}
            selected={month}
            setSelected={setMonth}
          />
        </div>
        <Select
          options={yearList}
          selected={selectedYear}
          setSelected={setSelectedYear}
        />
      </SelectorWrapper>
      <Weeks
        varient={varient}
        monthIndex={month}
        selectedYear={yearList[selectedYear]}
        onClick={changeSelectedDate(month)}
        selected={selectedDate}
      />
    </>
  );
}

export default DatePicker;
