"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInTime = void 0;
var luxon_1 = require("luxon");
var isInTime = function (inputDate, targetTime, direction, timezone) {
    var dateInUtc = luxon_1.DateTime.fromJSDate(inputDate, { zone: "utc" });
    var _a = targetTime.split(":").map(Number), hours = _a[0], minutes = _a[1];
    var targetDate = luxon_1.DateTime.fromObject({
        year: dateInUtc.year,
        month: dateInUtc.month,
        day: dateInUtc.day,
        hour: hours,
        minute: minutes,
    })
        .setZone(timezone)
        .toUTC();
    if (direction === "before") {
        return dateInUtc <= targetDate;
    }
    else if (direction === "after") {
        return dateInUtc >= targetDate;
    }
    throw new Error("Invalid direction \"".concat(direction, "\". Must be \"before\" or \"after\"."));
};
exports.isInTime = isInTime;
