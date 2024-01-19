"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePeriod = void 0;
var calculatePeriod = function (_a) {
    var start = _a.start, end = _a.end, basePeriodMinutes = _a.basePeriodMinutes;
    var startDateTime = new Date(start);
    var endDateTime = new Date(end);
    // do not considerate seconds as it may cause some confusions
    // in the calculation, the UI is expected to show only minutes
    // use seconds can variate by one minute. Doing this will avoid
    // any problem
    startDateTime.setSeconds(0);
    endDateTime.setSeconds(0);
    // Calculate total lunch time in minutes
    var diffMs = Math.abs(endDateTime.getTime() - startDateTime.getTime());
    var totalLunchMinutes = Math.floor(diffMs / 1000 / 60);
    // Calculate normal and extended lunch time
    var normalMinutes = totalLunchMinutes;
    var extendedMinutes = 0;
    if (totalLunchMinutes > basePeriodMinutes) {
        normalMinutes = basePeriodMinutes;
        extendedMinutes = totalLunchMinutes - basePeriodMinutes;
    }
    var hours = Math.floor(normalMinutes / 60);
    var minutes = normalMinutes % 60;
    var hoursExtended = Math.floor(extendedMinutes / 60);
    var minutesExtended = extendedMinutes % 60;
    return {
        hours: hours,
        minutes: minutes,
        hoursExtended: hoursExtended,
        minutesExtended: minutesExtended,
        totalHours: hours + hoursExtended,
        totalMinutes: minutes + minutesExtended,
    };
};
exports.calculatePeriod = calculatePeriod;
