/* 
  Calculate de age giving the birthday and a reference Date.The reference
  date usually is "today", to know the current age, but it can be changed
  to know how many year will have in a specific date
*/
export const calculateAge = (birthday: Date | string, referenceDate: Date | string) => {
  if (typeof birthday === "string") {
    birthday = new Date(birthday);
  }

  if (typeof referenceDate === "string") {
    referenceDate = new Date(referenceDate);
  }

  let yearsDifference = referenceDate.getFullYear() - birthday.getFullYear();
  let monthsDifference = referenceDate.getMonth() - birthday.getMonth();
  let daysDifference = referenceDate.getDate() - birthday.getDate();

  if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
    yearsDifference--;
    monthsDifference += 12;
  }

  if (daysDifference < 0) {
    const previousMonthDays = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0).getDate();
    daysDifference += previousMonthDays;
  }

  return {
    years: yearsDifference,
    months: monthsDifference,
    days: daysDifference,
  };
};
