import React, { useState } from "react";
import { takeWeeks, takeMonths, takeYears } from "../../utils/dates";
import {
  WeekWrapper,
  WeekNameWrapper,
  Week,
  WeekName,
  SelectorWrapper,
  Selector,
} from "./Styles";
import { format, isSameDay, isSameMonth, getMonth, getYear } from "date-fns";
import Card from "../Card";
import Select from "../Select/Select";

const SelectorHeader = ({ month }) => {
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

  const getSelectedMonth = (month) => {
    return getMonth(month[1][0]);
  };

  const getYearList = (selectedYear, length = 21) => {
    const pivot = Math.floor(length / 2);
    console.log(pivot);
    const years = [...Array(length)].map(
      (_, index) => selectedYear - pivot + index
    );
    const seleted = years.indexOf(selectedYear);
    return { yearList: years, selected: seleted };
  };

  const currentYear = getYear(month[1][0]);
  const { yearList, selected } = getYearList(currentYear);

  return (
    <SelectorWrapper>
      <div>
        <Select options={monthNames} initVal={getSelectedMonth(month)} />
      </div>
      <Select options={yearList} initVal={selected} />
    </SelectorWrapper>
  );
};

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

const Weeks = ({ month }) => {
  const getWeekClasses = (month, day) => {
    if (!isSameMonth(month[1][0], day)) return "text-disabledGrey";
    return "text-primaryGrey";
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
              className={`${getWeekClasses(month, day)} ${getCurrentDayClasses(
                day
              )}`}
            >
              {format(day, "dd")}
            </Week>
          );
        });
      })}
    </WeekWrapper>
  );
};

const handleClick = () => {
  const tw = takeWeeks();
  const ty = takeYears();
  const tm = takeMonths();

  console.log(ty());
  console.log(ty());
};

function DatePicker() {
  const tm = takeMonths();
  let month = tm();

  return (
    <Card classNames="bg-primaryWhite w-[500px] h-[500px] p-[20px] m-20">
      <SelectorHeader month={month} />
      <WeekHeader />
      <Weeks month={month} />
    </Card>
  );
}

export default DatePicker;
