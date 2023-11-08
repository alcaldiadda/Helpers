"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
/*
  Calculate de age giving the birthday and a reference Date.The reference
  date usually is "today", to know the current age, but it can be changed
  to know how many year will have in a specific date
*/
var calculateAge = function (birthday, referenceDate) {
    if (typeof birthday === "string") {
        birthday = new Date(birthday);
    }
    if (typeof referenceDate === "string") {
        referenceDate = new Date(referenceDate);
    }
    var yearsDifference = referenceDate.getFullYear() - birthday.getFullYear();
    var monthsDifference = referenceDate.getMonth() - birthday.getMonth();
    var daysDifference = referenceDate.getDate() - birthday.getDate();
    if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
        yearsDifference--;
        monthsDifference += 12;
    }
    if (daysDifference < 0) {
        var previousMonthDays = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0).getDate();
        daysDifference += previousMonthDays;
    }
    return {
        years: yearsDifference,
        months: monthsDifference,
        days: daysDifference,
    };
};
exports.calculateAge = calculateAge;
