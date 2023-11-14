"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffBetweenDates = void 0;
var luxon_1 = require("luxon");
var diffBetweenDates = function (date1, date2, unit) {
    if (unit === void 0) { unit = "hours"; }
    // Parse the dates
    var dt1 = luxon_1.DateTime.fromISO(date1);
    var dt2 = luxon_1.DateTime.fromISO(date2);
    // Get the difference
    var diff = dt2.diff(dt1).as(unit);
    return diff;
};
exports.diffBetweenDates = diffBetweenDates;
