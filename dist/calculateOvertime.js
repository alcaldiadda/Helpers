"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateOvertime = void 0;
var luxon_1 = require("luxon");
var calculateOvertime = function (_a, overtimeSessions) {
    var start = _a.start, end = _a.end, isWorkingDay = _a.isWorkingDay, timezone = _a.timezone;
    var startDate = luxon_1.DateTime.fromISO(start).setZone(timezone);
    var endDate = luxon_1.DateTime.fromISO(end).setZone(timezone);
    var workInterval = luxon_1.Interval.fromDateTimes(startDate, endDate);
    var overtimeResults = {};
    // Initialize overtimeResults
    overtimeSessions.forEach(function (session) {
        overtimeResults[session.name] = {
            minutes: 0,
            interval: luxon_1.Interval.invalid("Not Set"),
        };
    });
    while (startDate < endDate) {
        overtimeSessions.forEach(function (session) {
            var sessionStartParts = session.time.start.split(":");
            var sessionEndParts = session.time.end.split(":");
            var sessionStartDate = startDate.set({
                hour: Number(sessionStartParts[0]),
                minute: Number(sessionStartParts[1]),
            });
            var sessionEndDate = startDate.set({
                hour: Number(sessionEndParts[0]),
                minute: Number(sessionEndParts[1]),
            });
            // If the end time is less than start time, it means the session goes into the next day
            if (sessionEndDate < sessionStartDate) {
                sessionEndDate = sessionEndDate.plus({ days: 1 });
            }
            var overtimeInterval = luxon_1.Interval.fromDateTimes(sessionStartDate, sessionEndDate);
            var intersection = workInterval.intersection(overtimeInterval);
            if (intersection) {
                overtimeResults[session.name].minutes += intersection.length("minutes");
                if (!overtimeResults[session.name].interval.isValid) {
                    overtimeResults[session.name].interval = intersection;
                }
                else {
                    overtimeResults[session.name].interval =
                        overtimeResults[session.name].interval.union(intersection);
                }
            }
        });
        startDate = startDate.plus({ days: 1 });
    }
    // handle the holiday and weekend scenario
    if (!isWorkingDay) {
        var totalMinutes = workInterval.length("minutes");
        return {
            "25": {
                hours: 0,
                minutes: 0,
                start: start,
                end: end,
            },
            "50": {
                hours: Math.floor(totalMinutes / 60),
                minutes: Math.round(totalMinutes % 60),
                start: start,
                end: end,
            },
        };
    }
    var overtimeOutput = {};
    Object.keys(overtimeResults).forEach(function (key) {
        var _a, _b;
        var totalMinutes = overtimeResults[key].minutes;
        overtimeOutput[key] = {
            hours: Math.floor(totalMinutes / 60),
            minutes: Math.round(totalMinutes % 60),
            start: ((_a = overtimeResults[key].interval.start) === null || _a === void 0 ? void 0 : _a.toUTC().toISO()) || "",
            end: ((_b = overtimeResults[key].interval.end) === null || _b === void 0 ? void 0 : _b.toUTC().toISO()) || "",
        };
        if (overtimeOutput[key].minutes === 60) {
            overtimeOutput[key].hours += 1;
            overtimeOutput[key].minutes = 0;
        }
    });
    return overtimeOutput;
};
exports.calculateOvertime = calculateOvertime;
