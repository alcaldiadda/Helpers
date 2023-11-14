"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitDateRange = void 0;
var luxon_1 = require("luxon");
luxon_1.Settings.defaultZone = "utc"; // set the default timezone for all DateTime objects to UTC
var splitDateRange = function (_a) {
    var start = _a.start, end = _a.end, timezone = _a.timezone;
    var startDate = luxon_1.DateTime.fromISO(start, { zone: timezone });
    var endDate = luxon_1.DateTime.fromISO(end, { zone: timezone });
    var periods = [];
    while (startDate < endDate) {
        // Calculate the end of the current day
        var endOfDay = startDate.set({
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 999,
        });
        // If the end date is before the end of the current day, use the end date
        var endDayDuration = luxon_1.Interval.fromDateTimes(endOfDay, endDate).length("minutes");
        if (endDate < endOfDay || endDayDuration < 1) {
            endOfDay = endDate;
        }
        // Skip if the period duration is less than a minute
        var periodDuration = luxon_1.Interval.fromDateTimes(startDate, endOfDay).length("minutes");
        if (periodDuration > 1) {
            periods.push({
                start: startDate.toUTC().toString(),
                end: endOfDay.toUTC().toString(),
            });
        }
        // Set start to the start of the next day
        startDate = endOfDay.set({
            hour: 24,
            minute: 0,
            second: 0,
            millisecond: 0,
        });
    }
    return periods;
};
exports.splitDateRange = splitDateRange;
//# sourceMappingURL=splitDateRange.js.map