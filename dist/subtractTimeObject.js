"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractTimeObjects = void 0;
var luxon_1 = require("luxon");
var subtractTimeObjects = function (time1, time2) {
    var endTime1 = luxon_1.DateTime.fromISO(time1.end);
    var minutes1 = time1.hours * 60 + time1.minutes;
    var minutesToSubtract = time2.hours * 60 + time2.minutes;
    var diffMinutes = minutes1 - minutesToSubtract;
    // If diffMinutes is negative, the result will have 0 hours and minutes, and the remain will capture the negative difference.
    if (diffMinutes < 0) {
        var absDiffMinutes = Math.abs(diffMinutes);
        var resultHours_1 = Math.floor(absDiffMinutes / 60);
        var resultMinutes_1 = absDiffMinutes % 60;
        return {
            hours: 0,
            minutes: 0,
            start: time1.start,
            end: time1.end,
            remain: { hours: resultHours_1, minutes: resultMinutes_1 },
        };
    }
    var resultHours = Math.floor(diffMinutes / 60);
    var resultMinutes = diffMinutes % 60;
    var differenceTime = endTime1.minus({ minutes: minutesToSubtract });
    return {
        hours: resultHours,
        minutes: resultMinutes,
        start: time1.start,
        end: differenceTime.toISO(),
        remain: { hours: 0, minutes: 0 },
    };
};
exports.subtractTimeObjects = subtractTimeObjects;
