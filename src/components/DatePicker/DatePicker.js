import React, { useState, useEffect } from "react";
import { takeMonths } from "../../utils/dates";
import { WeekWrapper, Week, WeekName, SelectorWrapper } from "./Styles";
import { isSameDay, isSameMonth, getYear, startOfDay } from "date-fns";
import format from "date-fns/format";
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
      {weekNames.map((name, index) => (
        <WeekName key={index} varient={varient}>
          {name}
        </WeekName>
      ))}
      {month.map((week, index) => {
        return week.map((day) => {
          return (
            <Week
              key={`${selectedYear}-${month}-${week}-${day}`}
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

function DatePicker({
  varient = "default",
  selectedDate,
  setSelectedDate = () => {},
  startYear,
  endYear,
}) {
  const getSelectedYear = (selectedDate) => {
    if (selectedDate && typeof selectedDate !== String) {
      return getYear(startOfDay(selectedDate));
    } else {
      return getYear(startOfDay(new Date()));
    }
  };

  const getSelectedMonth = (selectedDate) => {
    if (!selectedDate) selectedDate = new Date();
    return selectedDate.getMonth();
  };

  const getYearList = (selectedYear, startYear, endYear, length = 21) => {
    const currentYear = getYear(startOfDay(new Date()));
    const pivot = Math.floor(length / 2);

    startYear = startYear ? startYear : currentYear - pivot;
    endYear = endYear ? endYear : currentYear + pivot;

    const years = [];

    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }

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

  const yearListObj = getYearList(
    getSelectedYear(selectedDate),
    startYear,
    endYear
  );
  const yearList = yearListObj.yearList;

  const [selectedYear, setSelectedYear] = useState(yearListObj.selected);
  const [month, setMonth] = useState(getSelectedMonth(selectedDate));

  useEffect(() => {
    setSelectedYear(yearListObj.selected);
    setMonth(getSelectedMonth(selectedDate));
  }, [selectedDate]);

  const changeSelectedDate = (month) => (e) => {
    e.preventDefault();
    const day = e.currentTarget.id;
    const newDate = new Date(yearList[selectedYear], month, day);
    setSelectedDate(newDate);
  };

  return (
    <>
      <SelectorWrapper varient={varient}>
        <div>
          <Select
            options={monthNames}
            value={monthNames[month]}
            onChange={({ value }) => setMonth(monthNames.indexOf(value))}
          />
        </div>
        <Select
          options={yearList}
          value={yearList[selectedYear]}
          onChange={({ value }) => setSelectedYear(yearList.indexOf(value))}
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
