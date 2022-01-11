import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfYear,
  endOfMonth,
  addDays,
} from "date-fns";

function takeWeeks(date = new Date()) {
  let weekStart = startOfWeek(startOfDay(date));

  return () => {
    const weeks = [...Array(7)].map((_, index) => addDays(weekStart, index));
    weekStart = addDays(weeks[6], 1);

    return weeks;
  };
}

function takeMonths(date = new Date()) {
  let startMonth = startOfMonth(startOfDay(date));
  let month = [];

  const doGen = (week, endMonth) => {
    return week[6] < endMonth;
  };

  return () => {
    let endMonth = startOfDay(endOfMonth(startMonth));
    let tw = takeWeeks(startMonth);
    let week = tw();

    month.push(week);

    while (doGen(week, endMonth)) {
      week = tw();

      month.push(week);
    }

    const data = month;
    month = [];

    startMonth = addDays(endMonth, 1);

    return data;
  };
}

function takeYears(date = new Date()) {
  let startYear = startOfYear(startOfDay(date));
  const tm = takeMonths(startYear);

  const doGen = (month, endYear) => month[month.length - 1][6] < endYear;
  return () => {
    let endYear = startOfDay(endOfYear(startYear));
    let year = [];
    let month = tm();

    year.push(month);

    while (doGen(month, endYear)) {
      month = tm();
      year.push(month);
    }

    const data = year;
    year = [];

    startYear = addDays(endYear, 1);

    return data;
  };
}

export { takeWeeks, takeMonths, takeYears };
