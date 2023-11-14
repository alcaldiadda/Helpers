"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTimeRange = void 0;
var luxon_1 = require("luxon");
// Check if data is within session time range
var checkTimeRange = function (data, session, timezone) {
    var startSession = session.start, endSession = session.end;
    var startDate = data.start, endDate = data.end;
    var startDateLocal = luxon_1.DateTime.fromISO(startDate).setZone(timezone);
    var endDateLocal = luxon_1.DateTime.fromISO(endDate).setZone(timezone);
    var _a = startSession.split(":").map(Number), startHour = _a[0], startMinute = _a[1];
    var _b = endSession.split(":").map(Number), endHour = _b[0], endMinute = _b[1];
    var startSessionDate = luxon_1.DateTime.fromObject({
        year: startDateLocal.year,
        month: startDateLocal.month,
        day: startDateLocal.day,
        hour: startHour,
        minute: startMinute,
    }, { zone: timezone });
    var endSessionDate = luxon_1.DateTime.fromObject({
        year: endDateLocal.year,
        month: endDateLocal.month,
        day: endDateLocal.day,
        hour: endHour,
        minute: endMinute,
    }, { zone: timezone });
    return startDateLocal >= startSessionDate && endDateLocal <= endSessionDate;
};
exports.checkTimeRange = checkTimeRange;
//# sourceMappingURL=checkTimeRange.js.map