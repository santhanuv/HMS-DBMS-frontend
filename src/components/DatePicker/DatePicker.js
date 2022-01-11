import React from "react";
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
import { RiArrowDropDownLine } from "react-icons/ri";

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

  const isSelectedMonth = (month, index) => {
    if (index === getMonth(month[1][0])) return "selected";
    else return "";
  };

  const getYearListOptions = (selectedYear) => {
    return [...Array(21)].map((_, index) => {
      let year = selectedYear - 10 + index;
      return (
        <option selected={year === selectedYear ? "selected" : ""}>
          {year}
        </option>
      );
    });
  };

  const currentYear = getYear(month[1][0]);

  return (
    <SelectorWrapper>
      <div>
        <Selector>
          {monthNames.map((monthName, index) => (
            <option selected={isSelectedMonth(month, index)}>
              {monthName}
            </option>
          ))}
        </Selector>
      </div>
      <Selector>{getYearListOptions(currentYear)}</Selector>
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

// const getMonthName = (month) => {
//   return format(month[2][0], "LLL");
// };

// const getYear = (month) => {
//   return format(month[2][0], "yyyy");
// };

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
